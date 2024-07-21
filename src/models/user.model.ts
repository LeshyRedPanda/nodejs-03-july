import mongoose from "mongoose";
import {RoleEnum} from "../enums/role.enum";
import {IUser} from "../interfaces/user.interface";
const {Schema} = mongoose;

const userSchema = new Schema({
   name:{type:String,require:true},
   age:{type:Number,require:true},
   email:{type:String,require:true,unique:true},//unique field
   password:{type:String,require:true},
   phone:{type:String,require:false},
   role:{type:String,enum:RoleEnum,require:true,default:RoleEnum.USER},
   isVerified:{type:Boolean,require:true,default:true},
},
    {
        timestamps:true,
        versionKey:false,
    }


);

export const User = mongoose.model<IUser>('users',userSchema);


