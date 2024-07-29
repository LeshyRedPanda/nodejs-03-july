import * as jsonwebtoken from "jsonwebtoken"
import {configs} from "../configs/configs";
import {ITokenPair, ITokenPayload} from "../interfaces/token.interface";
import {ApiError} from "../errors/api-error";



class TokenService {
    public async generatePair(payload:ITokenPayload): Promise<ITokenPair> {
       const accessToken = jsonwebtoken.sign(
           payload,
           configs.JWT_ACCESS_SECRET ,
           {expiresIn:configs.JWT_ACCESS_EXPIRES_IN});

        const refreshToken = jsonwebtoken.sign(
            payload,
            configs.JWT_REFRESH_SECRET,
            {expiresIn:configs.JWT_REFRESH_EXPIRES_IN});
        return {
            accessToken,
            refreshToken
        }
    }


    public checkToken(token:string): ITokenPayload {
        try {
            const secret = 'asdas;sdbgbyt;uywer';
            console.log('Token to verify:', token);
            const payload = jsonwebtoken.verify(token, configs.JWT_ACCESS_SECRET) as ITokenPayload;
            console.log('Decoded payload:', payload);
            return payload;
        }catch (error){
            console.error('Token verification error:', error);
            throw  new ApiError('token is not valid (token service)',401)
        }

    }

}


export const tokenService = new TokenService();