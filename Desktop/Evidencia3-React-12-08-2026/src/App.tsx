import React, {useState} from 'react';
import type { Tarea, Prioridad } from './interfaces/Form';
import ListaTareas from './components/ListaTareas';
import FormTarea from './components/FormTarea';

// Componentes Funcionales
// Función que retorna código JSX
const App = () => {

  // Estado para guardar la lista de tareas
  const [misTareas, setMisTareas] = useState<Tarea[]>([]);

  // Función para agregar tarea - CORREGIDA
  const addTarea = (titulo: string, prioridad: Prioridad) => {
    // Crear nueva tarea
    const nuevaTarea: Tarea = {
      id: crypto.randomUUID(),
      titulo: titulo,
      prioridad: prioridad,
      completada: false
    };
    
    setMisTareas((prev) => [...prev, nuevaTarea]);
  };

  return (
    <>
      <FormTarea addTarea={addTarea} />
      <hr />
      <h2>Lista de Tareas</h2>
      <ListaTareas l={misTareas} />
    </>
  );
};

export default App;