import type { Request, Response } from 'express';
import type {LoginDTO} from '../types/login.types.js'
import { LoginUser } from '../services/login.service.js';
export async function handleLogin(req:Request , res: Response){

    const body = req.body ; 
    
    try{
        const result = await LoginUser(body);
        
        res
        .status(200)
        .json({
            success : true ,
            message : "Successfully Login",
            data : result
        })
    }
    catch(error)
    {
        res
        .status(400)
        .json({
            success : false , 
            message : "Login Failed",
            data : error
        })
    }


}