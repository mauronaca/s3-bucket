const express = require('express');
const aws = require('aws-sdk');
const path = require('path');

const app = express();

const portID = 3000;

app.listen(portID, () => {
    console.log(`App listening on port ${portID}`);
});