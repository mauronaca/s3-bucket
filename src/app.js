import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { router } from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const express = require('express');
const aws = require('aws-sdk');
const path = require('path');

const app = express();

const portID = 3000;

app.listen(portID, () => {
    console.log(`App listening on port ${portID}`);
});

app.use(router);