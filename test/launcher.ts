import { handler } from "../src/services/hello";

handler({
    body: "",
    headers: undefined,
    multiValueHeaders: undefined,
    httpMethod: "",
    isBase64Encoded: false,
    path: "",
    pathParameters: undefined,
    queryStringParameters: undefined,
    multiValueQueryStringParameters: undefined,
    stageVariables: undefined,
    requestContext: undefined,
    resource: ""
},{
    callbackWaitsForEmptyEventLoop: false,
    functionName: "",
    functionVersion: "",
    invokedFunctionArn: "",
    memoryLimitInMB: "",
    awsRequestId: "",
    logGroupName: "",
    logStreamName: "",
    getRemainingTimeInMillis: function (): number {
        throw new Error("Function not implemented.");
    },
    done: function (error?: Error, result?: any): void {
        throw new Error("Function not implemented.");
    },
    fail: function (error: Error | string): void {
        throw new Error("Function not implemented.");
    },
    succeed: function (messageOrObject: any): void {
        throw new Error("Function not implemented.");
    }
});