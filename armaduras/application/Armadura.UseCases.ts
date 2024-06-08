import ArmaduraRepository from "../domain/Armadura.Repository";

export default class ArmaduraUseCases{

    private armaduraRepository : ArmaduraRepository;
    
    constructor(armaduraRepository : ArmaduraRepository){
        this.armaduraRepository = armaduraRepository;
    }

    async getArmadurasCoraza(){
        return this.armaduraRepository.getArmadurasCoraza();
    }

    async getArmadurasGuantes(){
        return this.armaduraRepository.getArmadurasGuantes();
    }

    async getArmadurasPantalones(){
        return this.armaduraRepository.getArmadurasPantalones();
    }

    async getArmadurasBotas(){
        return this.armaduraRepository.getArmadurasBotas();
    }

}