import type { Tarea } from '../../interfaces/Form'
import {
  FcOk,
  FcCancel
} from 'react-icons/fc';

// INTERFACE PARA RECIBIR CADA 
// TAREA INDIVIDUAL
interface ItemTareaProp {
  t: Tarea
}

export function ItemTarea({ t }: ItemTareaProp) {

  return (

    <tr key={t.id}>

      <td>
        {t.id}
      </td>

      <td>
        {t.titulo}
      </td>

      <td>
        {t.prioridad}
      </td>


      {/* COMPLETADA */}
      <td
        style={{
          backgroundColor:
            "rgb(169, 168, 240)"
        }}
      >

        {
          t.completada === true
            ?

            <span
              style={{
                color: "green"
              }}
            >
              <FcOk />
            </span>

            :

            <span
              style={{
                color: "red"
              }}
            >
              <FcCancel />
            </span>
        }

      </td>

    </tr>

  )



}
