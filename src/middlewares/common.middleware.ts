import {Request, Response, NextFunction} from "express";
import {isObjectIdOrHexString} from "mongoose"
import {ApiError} from "../errors/api-error";
import {ObjectSchema} from "joi";


class CommonMiddleware {
    public isIdValid(paramName: string) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                const id = req.params[paramName];
                if (!isObjectIdOrHexString(id)) {
                    throw new ApiError('invalid id', 400);
                }
                next();
            } catch (e) {
                next(e);
            }
        }
    };


    public isBodyValid(validator: ObjectSchema) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
              req.body = await validator.validateAsync(req.body)
                next();
            } catch (e) {
                next(new ApiError(e.details[0].message,400))
            }
        }
    };
}





export const commonMiddleware = new CommonMiddleware();