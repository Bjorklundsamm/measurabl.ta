const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const controller = require('./controller');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Router
app.use('/get-data', controller.get);
app.use('/get-status', controller.status);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
