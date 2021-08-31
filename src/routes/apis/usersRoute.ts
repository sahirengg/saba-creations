import express, { Request, Response } from 'express';
import User from '../../models/userModel';
import {check,validationResult} from 'express-validator'
import jwt from "jsonwebtoken";
import gravatar from 'gravatar';
import config from 'config';
import  bcrypt from 'bcrypt';



// @route POST api/users
// @desc   Register user
// @access public

export const UserRouter = express.Router();



UserRouter.post('/user',[check('name','name is required').not().isEmpty(),
check('email','Please include a valid email').isEmail(),
check('password','Please enter the valid password with six characters or more').isLength({min:6})], async (req:Request,res:Response)=>{
const errors = validationResult(req);
if(!errors.isEmpty()){
    res.status(400).json({errors:errors.array()})
}  
  
const {name, email, password } = req.body;
 let user = await User.findOne({email})
try {
// see if user exists
if(user){
  return  res.status(400).json({errors:[{msg:"User already exists"}]})
}
// Get user Avatar

const avatar:any = gravatar.url(email,{
    r: "200",
    s:"pg",
    d: "mm"
})

user = new User({name,email,avatar,password})


// encrypt password
const salt:any  = await bcrypt.genSalt(10);
user.password =await bcrypt.hash(password,salt) 

await user.save()

   const payload = {
       user: {
           id: user.id
       }
   }

   jwt.sign(payload,config.get('JWT_TOKEN'),{expiresIn: 360000}, (err, token)=>{
       if(err){
           throw err
       }
       console.log(token,"token----->")
       res.json({token})
   })

//Return json web token

// res.send('User resgistered');
} catch (err) {
 return res.status(500).send("server error")
}





})

