import { useState, useEffect } from 'react';
import type { IUser, Rol } from '../interfaces/User';
import ListaUsers from '../components/Users/ListaUsers';
import FormUsers from '../components/Users/FormUsers';
import { getUserAxios, crearUserAxios } from '../servicios/UserService';

const UsersPage = () => {
  const [misUsers, setMisUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const datos = await getUserAxios();
        setMisUsers(datos);
      } catch (err) {
        console.error('Error cargando usuarios:', err);
      }
    };
    cargarDatos();
  }, []);

  const addUser = async (nombre: string, email: string, rol: Rol) => {
    const nuevoUser: IUser = {
      id: crypto.randomUUID(),
      nombre,
      email,
      rol,
    };

    try {
      const userCreado: IUser = await crearUserAxios(nuevoUser);
      setMisUsers((prev) => [...prev, userCreado]);
    } catch (err) {
      console.error('Error creando usuario:', err);
    }
  };

  return (
    <>
      <FormUsers addUser={addUser} />
      <hr />
      <h2>Lista de Usuarios</h2>
      <ListaUsers users={misUsers} />
    </>
  );
};

export default UsersPage;