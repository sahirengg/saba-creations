import { apiUrl } from "../../config/environment";
import axios from 'axios';
const baseUrl = 'http://localhost:7000/api/menu/items';

export const catListService = async () => {
    try {
        const res =  await axios.get(`${baseUrl}`)
        return res.data
    } 
    catch (error){
        console.log(error)
    }
   

      
}
