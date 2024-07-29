import {Request, Response, NextFunction} from "express";
import {isObjectIdOrHexString} from "mongoose"
import {ApiError} from "../errors/api-error";
import {ObjectSchema} from "joi";
import {tokenService} from "../services/token.service";
import {tokenRepository} from "../repositories/token.repository";


class AuthMiddleware {
    public async checkAccessToken(req: Request, res: Response, next: NextFunction) {
            try {
                const header = req.headers.authorization;
                console.log('auth middleware token :',header);
                if (!header){
                    throw new ApiError('token is not provided',401);
                }
                const accessToken = header.split('Bearer ')[1];
                const payload = tokenService.checkToken(accessToken);

                const pair = await tokenRepository.findByParams({accessToken:accessToken});
                if (!pair){
                    throw new ApiError('token is not valid (auth middleware)',401);
                }

                req.res.locals.jwtPayload = payload;
                next();
            } catch (e) {
                next(e);
            }
    }
}


export const authMiddleware = new AuthMiddleware();