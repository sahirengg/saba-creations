import express,  { Request, Response } from  'express';
import auth from '../../../middlewares/auth';
import User from '../../models/userModel';
import {check,validationResult} from 'express-validator'
import jwt from "jsonwebtoken";
import gravatar from 'gravatar';
import config from 'config';
import  bcrypt from 'bcrypt';



// @route POST api/auth
// @desc   authenticate user and Register user
// @access public
export const AuthRouter = express.Router();


AuthRouter.get('/auth',auth,async (req:any,res:any)=>{
    try {
         const user = await User.findById(req.user.id).select('-password')
         res.json(user)
    } catch (err) {
    //   console.log(err.message)
      res.status(500).send ('Server Error')
    }
})

// @route Api/users
// @desc  Register/user
// @access Public



AuthRouter.post('/auth',[check('name','name is required').not().isEmpty(),
check('email','Please include a valid email').isEmail(),

check('password','password is required').exists()], async (req:Request,res:Response)=>{
const errors = validationResult(req);

if(!errors.isEmpty()){
    res.status(400).json({errors:errors.array()})
}  
  
const { email, password } = req.body;
 
try {
// see if user exists
let user = await User.findOne({email})
if(!user){
  return  res.status(400).json({errors:[{msg:"Invalid Credentials"}]})
}
// Get user Avatar

// const avatar:any = gravatar.url(email,{
//     r: "200",
//     s:"pg",
//     d: "mm"
// })

// user = new User({name,email,avatar,password})


// // encrypt password
// const salt:any  = await bcrypt.genSalt(10);
// user.password =await bcrypt.hash(password,salt) 

// await user.save()
const isMatch = await bcrypt.compare(password, user.password);

if(!isMatch){
    return  res.status(400).json({errors:[{msg:"Invalid Credentials"}]})
}


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

