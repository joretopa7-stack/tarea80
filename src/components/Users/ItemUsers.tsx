import type { IUser } from '../../interfaces/User'
import {
  FcOk
} from 'react-icons/fc';

// INTERFACE PARA RECIBIR CADA 
// TAREA INDIVIDUAL
interface ItemUserProp {
  us: IUser
}

export function ItemUser({ us }: ItemUserProp) {

  return (

    <tr key={us.id}>

      <td>
        {us.id}
      </td>

      <td>
        {us.nombre}
      </td>

      <td>
        {us.email}
      </td>
      <td>
        {us.rol}
      </td>

      
      <td
        style={{
          backgroundColor:
            "rgb(169, 168, 240)"
        }}
      >

        {

            <span
              style={{
                color: "green"
              }}
            >
              <FcOk />
            </span>

            
        }

      </td>

    </tr>

  )



}
