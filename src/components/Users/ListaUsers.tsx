import type { IUser } from '../../interfaces/User';

interface ListaUsersProp {
  users: IUser[];
}

const ListaUsers = ({ users }: ListaUsersProp) => {
  if (users.length === 0) {
    return <p>No hay usuarios registrados.</p>;
  }

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          <strong>{u.nombre}</strong> — {u.email} — <em>{u.rol}</em>
        </li>
      ))}
    </ul>
  );
};

export default ListaUsers;