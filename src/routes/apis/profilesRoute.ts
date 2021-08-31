import express,{ Request, Response } from 'express';
import auth from '../../../middlewares/auth';
import Profile  from '../../models/profileModel';
import {check,validationResult} from 'express-validator'



// @route GET api/profile/me
// @desc  get current profiles
// @access Private


export const profileRouter = express.Router();

 profileRouter.get('/me',auth, async (req:any,res:Response)=>{
     try {
         const profiles = await Profile.findOne({user:req.user.id}).populate('user', ['name','avatar']);
         if(!profiles){
             return res.status(400).json({msg:'there is no profile for this user'})
         }
         res.json(profiles)
     }
     catch (err:any) {
         console.log(err.message)
         res.status(500).send("server error")
     }
    res.send("Profile routes")
})


// @route POST api/profile/
// @desc  create or update user profile
// @access Private

profileRouter.post('/profile',[auth, 
    [check('status','status is required').not().isEmpty(), 
check('skills','skills is required').not().isEmpty()]], async (req:Request,res:Response)=>{
   try {
       const errors:any = validationResult(req);
       if(!errors){
           return res.status(400).send({errors: "page not found"})  
         }
   } catch (err) {
       res.status(500).send('server error')
   }
})

