import PlantillaRepository from "../domain/Plantilla.Repository";
import UsuarioRepository from "../../usuarios/domain/Usuario.Repository";


export default class PlantillaUseCases {

    private plantillaRepository : PlantillaRepository;
    private usuarioRepository : UsuarioRepository;

    constructor(plantillaRepository : PlantillaRepository, usuarioRepository : UsuarioRepository){
        this.plantillaRepository = plantillaRepository;
        this.usuarioRepository = usuarioRepository;
    }

    async postPlantilla(token: string, plantilla: any) {        
        const plantillaId = await this.plantillaRepository.postPlantillaNombre(plantilla.nombrePlantilla);
        const usuario = await this.usuarioRepository.getUsuarioByUsername(token);
        await this.plantillaRepository.postPlantillaUsuario(plantillaId, usuario.id);
        await this.plantillaRepository.postPlantillaArmaduras(plantillaId, plantilla.idCoraza, plantilla.idGlifo1, plantilla.idGlifo2, plantilla.idGlifo3, plantilla.idGuantes, plantilla.idGlifo4, plantilla.idGlifo5, plantilla.idGlifo6, plantilla.idPantalones, plantilla.idGlifo7, plantilla.idGlifo8, plantilla.idGlifo9, plantilla.idBotas, plantilla.idGlifo10, plantilla.idGlifo11, plantilla.idGlifo12);
        await this.plantillaRepository.postPlantillaEspadas(plantillaId, plantilla.idEspadaAcero, plantilla.idRuna1, plantilla.idRuna2, plantilla.idRuna3, plantilla.idEspadaPlata, plantilla.idRuna4, plantilla.idRuna5, plantilla.idRuna6);
        
    }

}