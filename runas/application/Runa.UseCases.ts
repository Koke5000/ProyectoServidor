import RunaRepository from "../domain/Runa.Repository";

export default class RunaUseCases{

    private runaRepository : RunaRepository;
    
    constructor(runaRepository : RunaRepository){
        this.runaRepository = runaRepository;
    }

    async getRunas(){
        return this.runaRepository.getRunas();
    }
    
}