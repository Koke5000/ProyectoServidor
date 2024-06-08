import EspadaRepository from "../domain/Espada.Repository";

export default class EspadaUseCases{

    private espadaRepository : EspadaRepository;

    constructor(espadaRepository : EspadaRepository){
        this.espadaRepository = espadaRepository;
    }

    async getEspadasAcero(){
        return this.espadaRepository.getEspadasAcero();
    }
    async getEspadasPlata(){
        return this.espadaRepository.getEspadasPlata();
    }
}