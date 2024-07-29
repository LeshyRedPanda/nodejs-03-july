import {IUser} from "../interfaces/user.interface";
import {userRepository} from "../repositories/user.repository";
import {ApiError} from "../errors/api-error";
import {passwordService} from "./password.service";
import {tokenService} from "./token.service";
import {tokenRepository} from "../repositories/token.repository";
import {ITokenPair} from "../interfaces/token.interface";


class AuthService {

    public async signup(dto: IUser): Promise<{ user: IUser; tokens: ITokenPair }> {

        await this.isEmailExist(dto.email);

        const password = await passwordService.hashPassword(dto.password);
        const user = await userRepository.create({...dto, password});

        const tokens = await tokenService.generatePair({userId: user._id,role:user.role});
        await tokenRepository.create({...tokens,_userId:user._id })
        return {user,tokens};

    }

    private async isEmailExist(email: string): Promise<void> {
        const user = await userRepository.getByParams({email});
        if (user) {
            throw new ApiError('email already exist', 409)
        }
    }

}


export const authService = new AuthService();