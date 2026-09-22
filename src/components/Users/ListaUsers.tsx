import type { IUser } from "../../interfaces/User"

interface ListaUsersProp{
    lu:IUser[]

}

const ListaUsers=({lu}:ListaUsersProp) => {
  return (
    <>
    <h2>Lista de Usuarios</h2>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                lu.map((us:IUser)=>(
                    <td>
                        <tr>{us.nombre}</tr>
                        <tr>{us.email}</tr>
                    </td>
                    

                ))
            }
        </tbody>
    </table>
    </>
  )
}

export default ListaUsers