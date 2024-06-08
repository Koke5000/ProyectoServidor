import Espada from "./Espada";

export default interface EspadaRepository{
    getEspadasAcero(): Promise<Espada[]>;
    getEspadasPlata(): Promise<Espada[]>;
}