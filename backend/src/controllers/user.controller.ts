import type { Request,Response } from 'express';
import * as UserRegister from '../services/user.service.js'
const UserPost = async (req: Request, res: Response) => {
    try
    {
        const user:any = req.body ; 
        const result = await UserRegister.registerUser(user);

        res.status(201).json({
            success: true,
            message :'User Registered',
            data : result 
        });
    }
    catch(error:any)
    {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}
export default UserPost;