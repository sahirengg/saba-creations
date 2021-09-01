import React ,{ useState,useEffect } from "react";
import { DataContext,Item ,CatList } from "./data-context";
import { catListService } from "../../services/catListServices/catListService";


const DataProvider = ({children}: any) => {
    const [imgSrc, setImgSrc] = useState<any>("");
    const [catList, setCatList] = useState<any>([]);
    const [selectedItem, setSelectedItem] = useState<Item>({ catName: "",
        price: -1 ,
        description: "",
        image: ""
    });

    const handleApi = async () => {
        try {
            const res:any = await catListService();
            console.log(res.data,"tasmia")
               setCatList(res.data)
        }
        catch(error){
            console.log(error)
        }
       
    }
 useEffect(()=>{
    handleApi();
 },[])
             
    
    
 
    return (
        <DataContext.Provider value={{
            imgSrc,
            setImgSrc,
            catList, 
            selectedItem,
            setSelectedItem
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataProvider;