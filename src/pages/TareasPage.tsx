import {useState, useEffect} from 'react'
import type { Tarea, Prioridad } from '../interfaces/Form';
import ListaTareas from '../components/Tareas/ListaTareas';
import FormTarea from '../components/Tareas/FormTarea';
import { getTareasFetch, getTareasAxios, crearTareaFetch, crearTareaAxios } from '../servicios/TareaService';


const TareasPage = () => {
  
   // Estado para guardar la lista de tareas
    const [misTareas, setMisTareas] = useState<Tarea[]>([]);

      //cuando se cargue por
      //primera vez el componente
      //cargue los datos de la api
      //useEffect
    
      useEffect(()=>{
        const cargarDatos = async()=>{
        const datos = await getTareasAxios()
        //establecer el estado
        //de la lista de tareas
        setMisTareas(datos)
        }
        cargarDatos()
    
      },[])

        // Función para agregar tarea - CORREGIDA
  const addTarea = async(titulo: string, prioridad: Prioridad) => {
    // Crear nueva tarea
    const nuevaTarea: Tarea = {
      id: crypto.randomUUID(),
      titulo: titulo,
      prioridad: prioridad,
      completada: false
    };
    //1.1 guardar la nueva 
    // tarea en la api CON FETCH
    /*const tareaCreada:Tarea = 
      await crearTareaFetch(nuevaTarea)*/

    //TAREA AXIOS
      const tareaCreada:Tarea = 
      await crearTareaAxios(nuevaTarea)
    //2. ACTUALIZAR MISTAREAS,
    //CON TAREAS NUEVAS
    setMisTareas((prev) => [...prev, nuevaTarea]);
  };


    return (
    <>
      <FormTarea addTarea={addTarea} />
      <hr />
      <h2>Lista de Tareas</h2>
      <ListaTareas l={misTareas} />
    </>
  )
}

export default TareasPage