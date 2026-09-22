//1. restringir los tipos de prioridad
export type Prioridad = 'Alta'|
                'Media'|
                'Baja'

//2. Definir la estructura
//del formulario

export interface Formulario{
    titulo: string
    prioridad: Prioridad
}

//3. Definir la estructura
//del objeto de dominio correspondiente
export interface Tarea{
    id:string
    titulo:string
    prioridad:Prioridad
    completada:boolean
    
}