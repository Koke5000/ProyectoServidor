import executeQuery from "../../../context/db/PostgresConnection";
import Usuario from "../../domain/Usuario";
import UsuarioRepository from "../../domain/Usuario.Repository";

export default class UsuarioRepositoryPostgres implements UsuarioRepository{

    
    async registro(usuario: Usuario): Promise<Usuario> {
        await executeQuery(`INSERT INTO public.usuarios(nombre, apellidos, email, username, password) VALUES ('${usuario.nombre}', '${usuario.apellidos}', '${usuario.email}', '${usuario.username}', '${usuario.password}');`);
        return this.getUsuarioByUsername(usuario.username);
    }
    
    async login(loginCampos:any): Promise<Usuario> {
        const usuarioDB : any[] = await executeQuery(`SELECT * FROM usuarios WHERE username = '${loginCampos.emailOrUsername}' or email = '${loginCampos.emailOrUsername}'`);
        if (usuarioDB.length === 0) {
            throw new Error("Usuario/contraseña no es correcto");
        } else {
            const usuario : Usuario = {
                username: usuarioDB[0].username,
                email: usuarioDB[0].email,
                password: usuarioDB[0].password
            }
        return usuario;
        }
    }

    async getUsuarioByUsername(username : string){        
        const usuarioDB : any[] = await executeQuery(`SELECT * FROM usuarios WHERE username = '${username}'`);        
        const usuario : Usuario = {
            id:usuarioDB[0].id,
            nombre: usuarioDB[0].nombre,
            apellidos: usuarioDB[0].apellidos,
            email: usuarioDB[0].email,
            username: usuarioDB[0].username,
        }
        return usuario;
    }

    async getUsuarioByUsername2(username : string){        
        const usuarioDB : any[] = await executeQuery(`SELECT * FROM usuarios WHERE username = '${username}'`);   
        if(usuarioDB.length !== 0){     
        const usuario : Usuario = {
            nombre: usuarioDB[0].nombre,
            apellidos: usuarioDB[0].apellidos,
            email: usuarioDB[0].email,
            username: usuarioDB[0].username,
        }
        return usuario;
    }else{
        return []
       }
    }

    async getUsuarioByEmail(email : string){                
        const usuarioDB : any[] = await executeQuery(`SELECT * FROM usuarios WHERE email = '${email}'`);     
           if(usuarioDB.length !== 0){
            const usuario : Usuario = {
                nombre: usuarioDB[0].nombre,
                apellidos: usuarioDB[0].apellidos,
                email: usuarioDB[0].email,
                username: usuarioDB[0].username,
            }
            return usuario;
           }else{
            return []
           }

    }
}