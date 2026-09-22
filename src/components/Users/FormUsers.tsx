import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import type { Rol, IUserForm } from '../../interfaces/User';
import { FcBusinessman, FcCheckmark } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';

interface FormUsersProps {
  addUser: (nombre: string, email: string, rol: Rol) => void;
}

const FormUsers = ({ addUser }: FormUsersProps) => {
  const [form, setForm] = useState<IUserForm>({
    rol: 'Dev',
    nombre: '',
    email: '',
  });

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addUser(form.nombre, form.email, form.rol);

    setForm({ nombre: '', email: '', rol: 'Dev' });

    toast('Guardado', {
      icon: <FcCheckmark />,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <section>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <h1>Nuevo Usuario</h1>

        {/* NOMBRE */}
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <div className="input-icon">
            <FcBusinessman className="title-icon" />
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="p.ej: Juan Pérez"
              value={form.nombre}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="p.ej: juan@mail.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* ROL */}
        <div>
          <label htmlFor="rol">Rol:</label>
          <select
            id="rol"
            name="rol"
            value={form.rol}
            onChange={handleChange}
          >
            <option value="Dev">Dev</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div>
          <button type="submit">Guardar Usuario</button>
        </div>
      </form>
    </section>
  );
};

export default FormUsers;