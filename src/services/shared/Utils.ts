import { v4 } from "uuid";

export class JsonError extends Error { }

export const parseJSON = (arg: string) => {
    try {
        return JSON.parse(arg)
    } catch (error) {
        throw new JsonError(error.message)
    }
}

export const getRandomId = () => v4()