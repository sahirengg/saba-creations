import jwt from "jsonwebtoken";
import config from 'config';
import  { Request, Response, NextFunction } from 'express';

export default function (req:Request, res:Response, next: NextFunction){
    // Get token from header
    const token = req.header('x-auth-token')


    // check if not token
    if(!token){
      return  res.status(400).json({msg:'no token, authorization denied'});
    }

    try {
        const decoded:any = jwt.verify(token,config.get('JWT_TOKEN'));
        req.user = decoded.user;
        next()
    } catch (err) {
        res.send(401).json({msg:"token is not valid"})
    }
}