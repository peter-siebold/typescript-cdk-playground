import {Stack, StackProps} from "aws-cdk-lib"
import { Construct } from "constructs";
import { Code, Function as LambdaFunction, Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "node:path";

export class LamdbaStack extends Stack{
    constructor(scope: Construct, id: string, props?:StackProps){
        super(scope, id, props);

        new LambdaFunction(this, "HelloLambda", {
            runtime: Runtime.NODEJS_18_X,
            handler: "hello.main",
            code: Code.fromAsset(join(__dirname, "..", "services", "hello"))
        })
    }
}