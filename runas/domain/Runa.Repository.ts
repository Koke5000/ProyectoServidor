import Runa from "./Runa";

export default interface RunaRepository{
    getRunas():Promise<Runa[]>
}
