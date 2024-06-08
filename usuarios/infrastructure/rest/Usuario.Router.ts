import express from "express";
import UsuarioUseCases from "../../application/Usuario.UseCases";
import UsuarioRepositoryPostgres from "../db/Usuario.Postgres";
import Usuario from "../../domain/Usuario";
import { createToken, isAuth } from "../../../context/security/auth";
import UsuarioRepository from "../../domain/Usuario.Repository";
import PlantillaRepository from "../../../plantillas/domain/Plantilla.Repository";
import PlantillaRepositoryPostgres from "../../../plantillas/infrastructure/db/Plantilla.Postgres";

const router = express.Router();
const usuarioRepository : UsuarioRepository = new UsuarioRepositoryPostgres();
const plantillaRepository : PlantillaRepository = new PlantillaRepositoryPostgres();
const usuarioUseCases : UsuarioUseCases = new UsuarioUseCases(usuarioRepository, plantillaRepository);

router.post("/registro", async (req, res) => {
    try {
        res.json(await usuarioUseCases.registro(req.body));
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.post("/login", async (req, res) => {
    try {
        const loginCampos: any = {
            emailOrUsername: req.body.emailOrUsername,
            password: req.body.password,
        }
        const usuarioLogin : Usuario = await usuarioUseCases.login(loginCampos);
        if (usuarioLogin == null){
            res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        const usuario :Usuario  = {
            username: usuarioLogin.username
        };
        const token = createToken(usuario);
        res.json({usuario, token}); 
    } catch (error) {            
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.get("/perfil", isAuth,async (req, res) => {
    try {
        res.json(await usuarioUseCases.perfil(req.body.token));
    } catch (error) {      
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.get("/emailExists/:email",async (req, res) => {
    try {        
        
        res.json(await usuarioUseCases.emailExists(req.params.email));
     } catch (error) {         
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.get("/usernameExists/:username",async (req, res) => {
    try {
        res.json(await usuarioUseCases.usernameExists(req.params.username));
    } catch (error) {      
        res.status(500).json({error: "Internal Server Error"})
    }
});

export default router;