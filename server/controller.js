const model = require('./model.js');
const express = require('express');
const axios = require('axios');
const { isCompositeComponent } = require('react-dom/test-utils');
const { getEntryModel } = require('./model.js');

const app = express();



module.exports = {
  async get(req, res) {
    const rawData = await model.getRawData(req.query.urls);
    const entryModel = await model.getEntryModel(rawData);
    const modelData = await model.getDataSet(entryModel, rawData);
    await res.send(modelData);
  },

  status(req, res) {
    res.send('200')
  }
}
