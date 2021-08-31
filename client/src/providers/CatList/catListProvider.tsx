import React ,{ useState,useEffect } from "react";
import { CatListContext,Item ,CatList} from "./catListContext";
import { catListService } from "../../services/catListServices/catListService";


const CatListProvider = ({children}: any) => {
    const [catList, setCatList] = useState<any>([]);
    const [selectedItem, setSelectedItem] = useState<Item>({ catName: "",
        price: -1 ,
        description: "",
        image: ""
    });

    const handleApi = async () => {
        try {
            const res:any = await catListService();
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
        <CatListContext.Provider value={{
            catList, 
            selectedItem,
            setSelectedItem
        }}>
            {children}
        </CatListContext.Provider>
    )
}


export default CatListProvider;