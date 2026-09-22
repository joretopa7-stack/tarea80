import type { Tarea } from '../../interfaces/Form'
import { ItemTarea } from './ItemTarea'

//crear una interface de prop
//para indicar este componete
//se va recibir un arreglo(lista)
//pero de tareas
interface ListaTareasProps{
    l:Tarea[]
}
//Si se hicieron estilos
//Con CSS PROPERTIES
//PONERLOS AQUI





function ListaTareas( {l}: ListaTareasProps) {
  return (
      <section>

        <h1>
          Lista de tareas
        </h1>

        <table className="tabla">

          <thead>

            <tr>

              <th>
                id
              </th>

              <th>
                titulo
              </th>

              <th>
                prioridad
              </th>

              <th>
                completada
              </th>

            </tr>

          </thead>


          <tbody>

            {
              l.map((t)=>(
                <ItemTarea t={t} />
              ))
            }

          </tbody>


          {/* TOTAL DE TAREAS */}
          <tfoot>

            <tr>

              <th>
                total de tareas:
                {l.length}
              </th>

            </tr>

          </tfoot>

        </table>

      </section>
  )
}

export default ListaTareas