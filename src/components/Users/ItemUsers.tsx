import type { IUser } from '../../interfaces/User';

interface ItemUserProps {
  u: IUser;
}

export const ItemUser = ({ u }: ItemUserProps) => {
  return (
    <tr>
      <td>{u.id}</td>
      <td>{u.nombre}</td>
      <td>{u.email}</td>
      <td>{u.rol}</td>
    </tr>
  );
};