import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {findUserByEmail} from '../repositories/login.repository.js'
import type {LoginDTO} from '../types/login.types.js'

export async function LoginUser(data:LoginDTO){

    const user = await findUserByEmail(data.email);

    if(!user){
        throw new Error ('Invalid Email or Password');
    }

    const isMatch= bcrypt.compare(          //boolean values true or false
        data.password,
        user.password
    );

    if(!isMatch){
        throw new Error('Invalid Email or Password');
    }

    const token = jwt.sign({
        id : user.id ,
        email : user.email
    },
    process.env.JWT_SECRET!,
    {
        expiresIn : "1d"
    }
);

return {
    token,
    {
        id : user.id , 
        email : user.email, 
        firstName : user.first_name,
        lastName : user.last_name
    },
};
}