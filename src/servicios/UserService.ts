import axios from "axios";
import type { IUser} from "../interfaces/User";

//establecer direccion de los endpoints 
// de user
const API_USER = "http://localhost:3009/user"
//servicio para traer usuarios
export const getAllUsers = async()=>{
    const response = await axios.get(API_USER)

    const datos = await response.data
    return datos
}

//servcicio para crear usuarios
export const createUser = ()=>{}