import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3client.mjs";

export const bucketParams = {
    Bucket : "gdal-bucket-arg-2",
    Key : "metadata.json"
}

export const run = async (params) => {
    try {
        // Create a helper function to convert a ReadableStream to a string.
        const streamToString = (stream) =>
            new Promise((resolve, reject) => {
                const chunks = [];
                stream.on("data", (chunk) => chunks.push(chunk));
                stream.on("error", reject);
                stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
            });

        // Get the object} from the Amazon S3 bucket. It is returned as a ReadableStream.
        const data = await s3Client.send(new GetObjectCommand(bucketParams));

        //console.log(data.Body);

        // Convert the ReadableStream to a string.
        const bodyContents = await streamToString(data.Body);
        
        //console.log(JSON.parse(bodyContents));
        
        return JSON.parse(bodyContents);
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return error;
    }
};

//run();
export { run as getS3Object };
