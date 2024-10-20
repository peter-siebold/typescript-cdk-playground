import { Fn, Stack } from "aws-cdk-lib";

export function getSuffixFromStack(stack: Stack){
    const shortStackId = Fn.select(2, Fn.split("/", this.stackId))
    const stackSuffix = Fn.select(4, Fn.split("-", shortStackId))

    return stackSuffix
}