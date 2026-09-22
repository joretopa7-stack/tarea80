import type { IUser } from '../../interfaces/User';
import { ItemUser } from '../Users/ItemUsers';

interface ListaUsersProps {
  users: IUser[];
}

function ListaUsers({ users }: ListaUsersProps) {
  return (
    <section>
      <h1>Lista de usuarios</h1>

      <table className="tabla">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>email</th>
            <th>rol</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <ItemUser key={u.id} u={u} />
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>total de usuarios: {users.length}</th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}

export default ListaUsers;