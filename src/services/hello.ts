import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({})

async function handler(event: APIGatewayProxyEvent) {
    const command = new ListBucketsCommand({});
    const listBucketsResult = (await s3Client.send(command)).Buckets;

    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify("Hello from lambda, here are your buckets:" + JSON.stringify(listBucketsResult))
    }
    console.log("event::", event)
    return response;
}

export { handler }