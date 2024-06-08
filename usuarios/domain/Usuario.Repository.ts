import Usuario from "./Usuario";

export default interface UsuarioRepository {
    registro(usuario: Usuario): Promise<Usuario>;
    login(usuario: Usuario): Promise<Usuario>;
    getUsuarioByUsername(username : string): Promise<Usuario>
    getUsuarioByEmail(email: string);
    getUsuarioByUsername2(username: string);

}