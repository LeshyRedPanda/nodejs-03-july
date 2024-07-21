import {IUser} from "../interfaces/user.interface";
import {userRepository} from "../repositories/user.repository";
import {ApiError} from "../errors/api-error";


class UserService {
    public async getList():Promise<IUser[]>{
    return await userRepository.getList();
    }



    public async create(dto:IUser):Promise<IUser>{
        const {name,email,password} = dto;

        //validation
        if (!name.trim() || !email.trim() || !password.trim()){
            throw new Error('fill in : name, email , password')
        }

        const emailCheck =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailCheck.test(email)){
            throw new Error('invalid email,example : example@gmail.com ');
        }

        if (name.length <3) {
            throw new Error('name must be longer than 3 characters');
        }else if (name.length > 20){
            throw new Error('name cant be longer than 20 characters');
        }

        if (password.length < 6){
            throw new Error('password must be longer than 6 characters');
        }

        await this.isEmailExist(email);
        return await userRepository.create(dto);

    }

    public async getById(userId: string): Promise<IUser> {
        return await userRepository.getById(userId);
    }

    public async updateById(userId:string,dto:IUser):Promise<IUser>{
        return await userRepository.updateById(userId,dto);
    }

    public async deleteById(userId:string):Promise<void>{
        await userRepository.deleteById(userId);
    }
    private async isEmailExist(email:string):Promise<void> {
        const user = await userRepository.getByParams({email});
        if (user){
            throw new ApiError('email already exist',409)
        }
    }



}


export const userService = new UserService();