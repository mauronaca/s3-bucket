import { createRequire } from 'module';
import { getS3Object, bucketParams } from './libs/get_s3object.mjs';
const require = createRequire(import.meta.url);

const router = new require('express').Router();
const fetch = require('fetch');

router.get('/getAssets', (request, response) => {
    let query = request.query;
    console.log(query);

    //const awsPath = "s3://sentinel-cogs/sentinel-s2-l2a-cogs/32/T/PL/2021/9/S2A_32TPL_20210907_0_L2A/";
    
    if(query.Bucket == undefined || query.Key == undefined){
        response.sendStatus(422);

    } else {

        getS3Object({
            Bucket : query.Bucket,
            Key : query.Key
        }).then(data => {
            response.send(data);
        });
    
    }
});

export{ router };