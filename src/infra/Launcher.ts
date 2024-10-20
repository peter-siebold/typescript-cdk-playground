import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LamdbaStack } from "./stacks/LambdaStack";

const app = new App();

new DataStack(app, "DataStack");
new LamdbaStack(app, "LambdaStack");