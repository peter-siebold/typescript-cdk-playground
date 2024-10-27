import { handler } from "../src/services/spaces/handler";

handler({
    body: JSON.stringify({
        location: "London"
    }),
    headers: undefined,
    multiValueHeaders: undefined,
    httpMethod: "POST",
    isBase64Encoded: false,
    path: "",
    pathParameters: undefined,
    queryStringParameters: undefined,
    multiValueQueryStringParameters: undefined,
    stageVariables: undefined,
    requestContext: undefined,
    resource: ""
});