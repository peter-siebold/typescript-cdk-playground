import {Stack, StackProps} from "aws-cdk-lib"
import { Construct } from "constructs";
import { Code,  Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "node:path";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { ITable } from "aws-cdk-lib/aws-dynamodb";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

interface LambdaStackProps extends StackProps{
    spacesTable: ITable
}

export class LamdbaStack extends Stack{
    public readonly helloLamdbaIntegration: LambdaIntegration;

    constructor(scope: Construct, id: string, props:LambdaStackProps){
        super(scope, id, props);

        const helloLambda = new NodejsFunction(this, "HelloLambda", {
            runtime: Runtime.NODEJS_18_X,
            handler: "handler",
            entry: join(__dirname, "..", "..", "services", "hello.ts"),
            // code: Code.fromAsset(join(__dirname, "..", "..", "services")),
            environment: {
                TABLE_NAME: props.spacesTable.tableName
            }
        })

        this.helloLamdbaIntegration = new LambdaIntegration(helloLambda)
    }
}