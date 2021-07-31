const express = require('express');
const axios = require('axios');
const { raw } = require('express');
const e = require('express');

module.exports = {
  async getRequest(url) {
          const promise = axios.get(url);
          const dataPromise = promise.then((response) => response.data);
          return dataPromise;
  },

  async getRawData(urls) {
    console.log('Requesting data');
    let rawData = [];
    for (const url of urls){
        let dataSet = await this.getRequest(url);
        rawData.push(dataSet)
      }
    return rawData
  },

  async getEntryModel(rawData) {
    console.log('Forming template for table entries')
    let entryModel = {};
    for (var dataSet of rawData) {
      Object.entries(dataSet[0]).map(([key, value]) => {
        if(!entryModel[key]) entryModel[key] = 'n/a';
      })
    }
    return entryModel;
  },

  getDataSet(entryModel, rawData) {
    console.log('Modeling raw data after entry template')
    console.log(entryModel);
    let modelData = [];
    for(var dataSet of rawData) {
      for(var newEntry of dataSet) {
        let entryTmp = {};
        Object.keys(entryModel).forEach((key) =>{
          if(newEntry[key] !== undefined) {
              entryTmp[key] = newEntry[key]
          } else {
              entryTmp[key] = entryModel[key]
          }
        })
        if(modelData.length < 1) modelData.push(entryTmp)
        idMatch = false;
        for (var currentEntries of modelData) {
            if (currentEntries.id === entryTmp.id) {
                idMatch = true;
                Object.keys(entryTmp).forEach((key) => {
                    if(entryTmp[key] !== 'n/a') {
                        currentEntries[key] = entryTmp[key]
                    }
                  })
            }
        }
        if(!idMatch) {
            modelData.push(entryTmp)
        }
      }
    }
    return modelData;
  }
}