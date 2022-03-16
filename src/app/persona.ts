
export interface Persona{
    id_persona: string
    usuario:string,
    password: string,
    name:string,
    surname: string,
    company_email:string,
    personal_email:string,
    city: string,
    active: boolean,
    created_date: Date,
    imagen_url: string,
    termination_date: Date

}

export interface ListaPersona{
    lista: Persona[]
}