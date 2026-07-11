import * as userRepository from '../repositories/user.repository.js'
import type {CreateUserDTO}  from '../types/user.types.js'

export async function registerUser(user:CreateUserDTO){

    const existingUser = await userRepository.findUserByEmail(user.email);

    if (existingUser.length>0){
        throw Error("Email already Exist");
    }
    return await userRepository.createUser(user);
}