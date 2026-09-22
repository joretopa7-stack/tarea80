export type Rol = 'Dev' | 'Admin';

export interface IUser {
  id: string;
  nombre: string;
  email: string;
  rol: Rol;
}

export interface IUserForm {
  nombre: string;
  email: string;
  rol: Rol;
}