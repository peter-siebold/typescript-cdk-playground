import {Stack, StackProps} from "aws-cdk-lib"
import { Construct } from "constructs";
import { Code,  Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "node:path";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { ITable } from "aws-cdk-lib/aws-dynamodb";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

interface LambdaStackProps extends StackProps{
    spacesTable: ITable
}

export class LamdbaStack extends Stack{
    public readonly spacesLamdbaIntegration: LambdaIntegration;

    constructor(scope: Construct, id: string, props:LambdaStackProps){
        super(scope, id, props);

        const spacesLambda = new NodejsFunction(this, "SpacesLambda", {
            runtime: Runtime.NODEJS_18_X,
            handler: "handler",
            entry: join(__dirname, "..", "..", "services", "spaces", "handler.ts"),
            environment: {
                TABLE_NAME: props.spacesTable.tableName
            }
        });

        spacesLambda.addToRolePolicy(new PolicyStatement({
            effect: Effect.ALLOW,
            resources: [ props.spacesTable.tableArn],
            actions:[
                "dynamodb:PutItem",
                "dynamodb:Scan",
                "dynamodb:GetItem",
                "dynamodb:UpdateItem",
                "dynamodb:DeleteItem"
            ]
        }))
        this.spacesLamdbaIntegration = new LambdaIntegration(spacesLambda)
    }
}