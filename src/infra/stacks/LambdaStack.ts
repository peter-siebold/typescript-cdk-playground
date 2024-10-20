import {Stack, StackProps} from "aws-cdk-lib"
import { Construct } from "constructs";
import { Code, Function as LambdaFunction, Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "node:path";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";

export class LamdbaStack extends Stack{
    public readonly helloLamdbaIntegration: LambdaIntegration;

    constructor(scope: Construct, id: string, props?:StackProps){
        super(scope, id, props);

        const helloLambda = new LambdaFunction(this, "HelloLambda", {
            runtime: Runtime.NODEJS_18_X,
            handler: "hello.main",
            code: Code.fromAsset(join(__dirname, "..", "..", "services"))
        })

        this.helloLamdbaIntegration = new LambdaIntegration(helloLambda)
    }
}