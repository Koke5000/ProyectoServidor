import { hash } from "../../context/security/encrypter";
import Usuario from "../domain/Usuario";
import UsuarioRepository from "../domain/Usuario.Repository";
import PlantillaRepository from "../../plantillas/domain/Plantilla.Repository";
import { compare } from "bcrypt";


export default class UsuarioUseCases {

    private usuarioRepository : UsuarioRepository;
    private plantillaRepository : PlantillaRepository

    constructor(usuarioRepository : UsuarioRepository, plantillaRepository : PlantillaRepository){
        this.usuarioRepository = usuarioRepository;
        this.plantillaRepository = plantillaRepository;

    }

    async registro(usuario: Usuario): Promise<Usuario> {
        if (!usuario.password){
          throw new Error("Falta password");
        } 
        const cifrada = hash(usuario.password);
        usuario.password = cifrada;
        return this.usuarioRepository.registro(usuario);
    }

    async login(loginCampos: any): Promise<Usuario> {
        if (!loginCampos.password){
          throw new Error("Falta password");
        } 
        const usuarioBD = await this.usuarioRepository.login(loginCampos);
        if (!usuarioBD){
          throw new Error("Usuario no encontrado");
        }

        const iguales = await compare(loginCampos.password, String(usuarioBD.password));
        
        if (iguales) {
          return usuarioBD;
        } else {
          throw new Error("Usuario/contraseña no es correcto");
        }
    }

    async perfil(token: string) {
      
        const usuario = await this.usuarioRepository.getUsuarioByUsername(token);
        const plantillasUsuario = await this.plantillaRepository.getPlantillasUsuario(usuario.id);
        
        const perfil: Usuario= {
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            email: usuario.email,
            username: usuario.username,
            plantillas: plantillasUsuario //Añadir despues de crear una build, entonces se podra guardar en el usuario
        }
        return perfil; 
    } 

    async emailExists(email: string): Promise<Usuario> {
      return await this.usuarioRepository.getUsuarioByEmail(email);
    }

    async usernameExists(username: string): Promise<Usuario> {
      return await this.usuarioRepository.getUsuarioByUsername2(username);
    }

}