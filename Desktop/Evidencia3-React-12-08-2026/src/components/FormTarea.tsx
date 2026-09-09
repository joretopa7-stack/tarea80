import {useState,type ChangeEvent,
  type  FormEvent }from 'react'
import type {Formulario, Prioridad, Tarea}from '../interfaces/Form';
import {
  FcBusinessman,
  FcCheckmark
} from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';


interface FormTareaProps{
      addTarea:(titulo:string,prioridad:Prioridad)=>void

}


const FormTarea = ({addTarea}:FormTareaProps) => {

     const [form, setForm] = useState<Formulario>({
        prioridad: "Baja",
        titulo: ""
      })
      const handleChange = (
          event:
            | ChangeEvent<HTMLInputElement>
            | ChangeEvent<HTMLSelectElement>
        ) => {
      
          const { name, value } = event.target;
      
          console.log(`control:${name} - valor:${value}`);
      
          setForm({
            ...form,
            [name]: value
          });
        }

 // Función para gestionar el evento onChange
  

  // Función para gestionar el submit
const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {

    // Evitar el envío por defecto
    event.preventDefault();
    console.log("Formulario enviado");

    addTarea(form.titulo,form.prioridad)

    

    

    // Limpiar formulario
    setForm({
      titulo: "",
      prioridad: "Baja"
    });

    // Mensaje de confirmación
    toast('Guardado',
  {
    icon: <FcCheckmark />,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }

);
  };
    
  return (
    <section>
        <Toaster/>
        <form onSubmit={handleSubmit}>

          <h1>Nueva Tarea</h1>


          {/* CAMPO TÍTULO */}
          <div>

            <label htmlFor="titulo">
              Titulo:
            </label>

            {/* Contenedor del icono + input */}
            <div className="input-icon">

              <FcBusinessman className="title-icon" />

              <input
                type="text"
                name="titulo"
                id="titulo"
                placeholder="p.ej:subir commit a github"
                value={form.titulo}
                onChange={handleChange}
              />

            </div>

          </div>


          {/* CAMPO PRIORIDAD */}
          <div>

            <label htmlFor="prioridad">
              Prioridad:
            </label>

            <select
              id="prioridad"
              name="prioridad"
              onChange={handleChange}
              value={form.prioridad}
            >

              <option value="Alta">
                Alta
              </option>

              <option value="Media">
                Media
              </option>

              <option value="Baja">
                Baja
              </option>

            </select>

          </div>


          {/* BOTÓN GUARDAR */}
          <div>

            <button type="submit">
              Guardar Tarea
            </button>

          </div>

        </form>

      </section>
  )
}

export default FormTarea