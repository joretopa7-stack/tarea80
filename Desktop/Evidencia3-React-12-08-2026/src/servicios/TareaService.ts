
import axios from 'axios'
import type { Tarea } from '../interfaces/Form'

const API_URL = "http://localhost:3009/tareas"

/*
*Zona1:
*Metdos de
*obtencion de datos
*(Read)
*/

//Metodo 1: api fetch
export const getTareasFetch = async() => {
    //1. llamar a la api
    // pero con fetch
    const response = await fetch(API_URL)
    //2. extraer datos del response
    const datos = await response.json()
        return datos 

    
}

export const getTareasAxios = async() => {
    //1. llamar a la api
    // pero con axios
    const response = await axios.get(API_URL)
    //2. extraer datos del response
    const datos = await response.data
        return datos 
    
}





/*********************************************************************************************** */
/*
*Zona2:
*Metdos de
*Insercion de datos
*(Create)
*/

//TAREA CON FETCH
export const crearTareaFetch = async(t:Tarea) => {
    const response = await fetch(API_URL, {
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(t)
    })
    const datos = await response.json()
    return datos
}

//TAREA AXIOS
export const crearTareaAxios = async (t: Tarea) => {
    const response = await axios(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(t)  // Cambio: body → data
    });
    const datos = response.data;  // Cambio: response.json() → response.data
    return datos;
};
