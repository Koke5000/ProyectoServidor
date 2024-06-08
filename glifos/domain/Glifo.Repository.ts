import Glifo from "./Glifo";

export default interface GlifoRepository{
    getGlifos():Promise<Glifo[]>
}