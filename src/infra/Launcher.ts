import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LamdbaStack } from "./stacks/LambdaStack";
import { ApiStack } from "./stacks/ApiStack";

const app = new App();

new DataStack(app, "DataStack");
const lambdaStack = new LamdbaStack(app, "LambdaStack");
new ApiStack(app, "ApiStack", {
    helloLambdaIntegration: lambdaStack.helloLamdbaIntegration
})