import React,{useState, useEffect, createContext} from 'react';




// type ContextProps {
//     catList:Item;
// }
export interface Item {
    catName: string,
    price: number,
    description: string,
    image: string
}

export interface CatList {
    [x: string]: any;
    categoryList: Item[]
}


type ContextProps = {
    imgSrc:string,
    setImgSrc:(imgSrc:any) =>void;
    catList: CatList; 
    selectedItem?: Item;  
    setSelectedItem: (selectedItem: Item) => void;
}


   export const DataContext = createContext<ContextProps>({
    imgSrc:"",
    catList: [] as any,
    selectedItem: undefined,
    setSelectedItem:  (selectedItem?: Item) => {},
       setImgSrc: (imgSrc:any) => {}
   })