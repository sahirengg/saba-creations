/**
 * Required External Modules and Interfaces
 */
 import express, { NextFunction, Request, Response } from "express";
 import * as CatService from "../../categoryList/service";
 import mongoose from 'mongoose';
import {check,validationResult} from 'express-validator/check'

import CategoryList from "../../models/catModel";


/**
 * Router Definition
 */
 export const categoryRouter = express.Router();



// GET items
categoryRouter.get("/", async (req: Request, res:Response,next: NextFunction)=>{
  try {
   await CategoryList.find({},  (err:any,   categ:any) =>{
     
      if (err) return res.status(500).json("There was a problem finding the cat.");
      console.log("<---------------------------categ---------------------------->",categ)
     return res.status(200).json({data:categ});
  })
  
}
 catch(err){
   console.log("<---------------errrrr", err)
 }


 })


//  categoryRouter.post("/catlist", async (req: Request, res:Response,next: NextFunction)=>{
//   try {
//     const  {catName, price, description,image}  = req.body;
  
//     if(!req.body.catName || !req.body.price || !req.body.description || !req.body.image) {
//       return res.status(400).send({
//           message: "Note content can not be empty"
//       });
//   }
// // Create a category list
// const list = new CategoryList({
//   catName,
//   price,
//   description,
//   image
// });

// // Save category list in the database
// await list.save()
// .then((data:any) => {
//   res.send(data);
// }).catch((err:any) => {
//   res.status(500).send({
//       message: err.message || "Some error occurred while creating the Note."
//   });
// });

  
// }
//  catch(err){
//    console.log("<---------------errrrr", err)
//  }


//  })

