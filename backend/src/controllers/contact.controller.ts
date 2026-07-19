import { CreateContactMessage } from "../services/contact.service.js"
import type { Request, Response } from "express";

async function CreateContact(req:Request , res:Response){
try{
    const body = req.body
    const result = CreateContactMessage(body);

    res.status(200).json({
        success : true , 
        message : 'Message Successfully Sent',
        data : result 
    })
}
catch(error){
    res.status(500).json({
        success: false , 
        message:'Something Went Wrong',
    })
}

}
export default CreateContact