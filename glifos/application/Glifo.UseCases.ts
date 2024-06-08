import GlifoRepository from "../domain/Glifo.Repository";

export default class GlifoUseCases{

    private glifoRepository : GlifoRepository;
    
    constructor(glifoRepository : GlifoRepository){
        this.glifoRepository = glifoRepository;
    }

    async getGlifos() {
        return this.glifoRepository.getGlifos();
    }
}