import {useState,useEffect} from 'react'
import ListaUsers from '../components/Users/ListaUsers'
import FormUsers from '../components/Users/FormUsers'
import type { IUser } from '../interfaces/User'
import { getAllUsers } from '../servicios/UserService'

const UsersPage=()=> {

    //definir el estado de 
    //lista de usuarios
    const [lUser, setLUser] = useState<IUser[]>([])

    //useEffect:
    //cargar los usuarios cuando
    //renderiza la pagina
    useEffect( () => {
            //llamo al servicio
        const cargarUsuarios = async() => {
            const datos = await getAllUsers()
            console.log(datos)
            //establezco  el estado
            //con estos datos
            setLUser(datos)
        }
        cargarUsuarios()
    } ,[])

  return (
    <>
        <div>Pagina de usuarios</div>
        <ListaUsers lu={lUser}/>
        <FormUsers/>
    </>

  )
}

export default UsersPage