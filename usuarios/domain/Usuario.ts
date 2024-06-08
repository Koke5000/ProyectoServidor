import Plantilla from "../../plantillas/domain/Plantilla";

export default interface Usuario {
    id?: number,
    nombre?: string,
    apellidos?: string,
    email?: string,
    username: string,
    password?: string,
    plantillas?: Plantilla[]
}