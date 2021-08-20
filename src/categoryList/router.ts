/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as CatService from "./service";
 import mongoose from 'mongoose';

//  import {Categories} from './catInterface'
//  import { BaseCategory, Category } from "./catListInterfaces"
import Categories from "./catSchema";
//  const category = mongoose.model("User");


/**
 * Router Definition
 */
 export const categoryRouter = express.Router();


// console.log("<----------------Categories",Categories.find({}))
/**
 * Controller Definitions
 */
//  const CategoryModel = mongoose.model('categories')

// GET items
categoryRouter.get("/", async (req: Request, res:Response)=>{
//   Categories.find({},  (err:any,   categ:any) =>{
//     console.log("<---------------------------categ---------------------------->",categ)
//     if (err) return res.status(500).send("There was a problem finding the cat.");
    
//     res.status(200).send({categ});
// }).then((content)=>{
//   console.log("<---------------content", content)
// });

Categories.find({})
  .then(notes => {
    console.log(notes,"--------------------------------notessssssssssssssss")
      res.status(200).send(notes);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes."
      });
  });

 })



// GET items/:id

// categoryRouter.get("/:id", async (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id, 10);
  
//     try {
//       const item: Category = await CatService.find(id);
  
//       if (item) {
//         return res.status(200).send(item);
//       }
  
//       res.status(404).send("item not found");
//     } catch (e) {
//       res.status(500).send(e.message);
//     }
//   });
  

// POST items
// categoryRouter.post("/data", async (req: Request, res: Response) => {
//     // try {
//     //   const item: BaseCategory = req.body;
  
//     //   const newItem = await CatService.create(item);
  
//     //   res.status(201).json(newItem);
//     // } catch (e) {
//     //   res.status(500).send(e.message);
//     // }
// //  try {
//   var myData = new CategoryModel(req.body)
//   myData.save()
//   .then((item:any)=>{
//     res.send(item)
//   })
//   .catch((err:any)=>{
//     res.status(400).send("unable to save to database");

//   })
// //  }catch(e){
// //   res.status(500).send(e.message);
// //  }

//   });

// // PUT items/:id

// categoryRouter.put("/:id", async (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id, 10);
  
//     try {
//       const itemUpdate: Category = req.body;
  
//       const existingItem: Category = await CatService.find(id);
  
//       if (existingItem) {
//         const updatedItem = await CatService.update(id, itemUpdate);
//         return res.status(200).json(updatedItem);
//       }
  
//       const newItem = await CatService.create(itemUpdate);
  
//       res.status(201).json(newItem);
//     } catch (e) {
//       res.status(500).send(e.message);
//     }
//   });

// // DELETE items/:id

// categoryRouter.delete("/:id", async (req: Request, res: Response) => {
//     try {
//       const id: number = parseInt(req.params.id, 10);
//       await CatService.remove(id);
  
//       res.sendStatus(204);
//     } catch (e) {
//       res.status(500).send(e.message);
//     }
//   });

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  Note.find()
  .then(notes => {
      res.send(notes);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes."
      });
  });
};