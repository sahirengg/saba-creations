
/**
 * Data Model Interfaces
 */
import {Category,BaseCategory} from './catListInterfaces';
import {Categories} from './catInterface';
import img1 from '../Assets/SliderImages/cat1.jpeg';
import img5 from '../Assets/SliderImages/cat2.jpeg';
import img2 from '../Assets/SliderImages/cat3.jpg';
import img3 from '../Assets/SliderImages/cat4.jpg';
import img4 from '../Assets/SliderImages/cat5.jpg';
/**
 * In-Memory Store
 */
/**
 *
 * In-Memory Store
 */


 let items: Categories = {
    1: {
      id: 1,
      catName: "Froks",
      price: 599,
      description: "latest",
      image: "https://img1.exportersindia.com/product_images/bc-full/dir_63/1864053/indian-ladies-suits-fancy-salwar-kameez-1649835.jpg"
    },
    2: {
      id: 2,
      catName: "Jeans",
      price: 299,
      description: "Fancy",
      image: "https://5.imimg.com/data5/GG/FK/MY-16897/ladies-suits-500x500.jpg"
    },
    3: {
      id: 3,
      catName: "Tops",
      price: 199,
      description: "short",
      image: "https://3.imimg.com/data3/EG/KF/MY-12091607/ladies-suit-500x500.jpg"
    },
    4: {
      id: 4,
      catName: "Tops",
      price: 199,
      description: "short",
      image: "https://4.imimg.com/data4/RR/EJ/MY-11899560/fancy-pakistani-ladies-suits-500x500.jpg"
    }
  };
/**
 * Service Methods  
 */

 export const findAll = async (): Promise<Categories> => Object.values(items);

 export const find = async (id: number): Promise<Category> => items[id];
 
 export const create = async (newItem: BaseCategory): Promise<Category> => {
   const id = new Date().valueOf();
 
   items[id] = {
     id,
     ...newItem,
   };
 
   return items[id];
 };
 export const update = async (
    id: number,
    itemUpdate: BaseCategory
  ): Promise<Category | null> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    items[id] = { id, ...itemUpdate };
  
    return items[id];
  };

  export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    delete items[id];
  };