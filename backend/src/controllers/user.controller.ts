import type { Request,Response } from 'express';
import {CreateUser} from '../services/user.service.js'
export async function RegisterUser(
  req: Request,
  res: Response
) {
  try {
    const result = await CreateUser(req.body);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Registration Failed",
      error
    });
  }
}