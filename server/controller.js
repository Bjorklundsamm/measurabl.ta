const dataModel = require('./model.js');
const express = require('express');
const axios = require('axios');
const { isCompositeComponent } = require('react-dom/test-utils');

const app = express();

module.exports = {
  get(req, res) {
    let url = 'http://5c37c33f7820ff0014d927c5.mockapi.io/msr/names';
    axios.get(url)
    .then(({data}) => {
        console.log("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
        res.send(data);
      })
      .catch(error => {
          console.log(error)
      })
  }
}