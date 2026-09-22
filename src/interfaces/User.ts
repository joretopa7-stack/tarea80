export type Rol = 'Admin' | 'Dev'

export interface IUserForm{
    nombre: string
    email: string
    rol: Rol
}
export interface IUser{
    id: string
    nombre: string
    email: string
    rol: Rol 
}