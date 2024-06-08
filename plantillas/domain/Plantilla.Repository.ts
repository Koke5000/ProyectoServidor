import Plantilla from "./Plantilla";

export default interface UsuarioRepository {
    getPlantillasUsuario(usuarioId: number): Promise<Plantilla[]>;
    postPlantillaNombre(nombre: string): Promise<number>;
    postPlantillaUsuario(id_plantilla: number, id_usuario: number);
    postPlantillaEspadas(id: number, espada_acero: number, runa1: number, runa2: number, runa3: number, espada_plata: number, runa4: number, runa5: number, runa6: number);
    postPlantillaArmaduras(id: number, coraza: number, glifo1: number, glifo2: number, glifo3: number, guantes: number, glifo4: number, glifo5: number, glifo6: number, pantalones: number, glifo7: number, glifo8: number, glifo9: number, botas: number, glifo10: number, glifo11: number, glifo12: number);
}