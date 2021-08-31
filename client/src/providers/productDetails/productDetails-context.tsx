import React,{useState, useEffect, createContext} from 'react';

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

// type ContextProps {
//     catList:Item;
// }

export const CatListContext = createContext<{
    catList: CatList; 
    selectedItem?: Item;  
    setSelectedItem: (selectedItem: Item) => void;


   }>({
     catList: [] as any,
     selectedItem: undefined,
     setSelectedItem:  (selectedItem?: Item) => {},
}) 