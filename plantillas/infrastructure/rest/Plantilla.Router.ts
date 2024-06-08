import express from "express";
import { isAuth } from "../../../context/security/auth";
import PlantillaRepositoryPostgres from "../db/Plantilla.Postgres";
import PlantillaRepository from "../../domain/Plantilla.Repository";
import PlantillaUseCases from "../../application/Plantilla.UseCases";
import Plantilla from "../../domain/Plantilla";
import UsuarioRepositoryPostgres from "../../../usuarios/infrastructure/db/Usuario.Postgres";
import UsuarioRepository from "../../../usuarios/domain/Usuario.Repository";

const router = express.Router();
const plantillaRepository : PlantillaRepository = new PlantillaRepositoryPostgres();
const usuarioRepository : UsuarioRepository = new UsuarioRepositoryPostgres();
const plantillaUseCases : PlantillaUseCases = new PlantillaUseCases(plantillaRepository, usuarioRepository);

router.post("/", isAuth, async (req, res) => {
    try {
        const token : string | undefined = req.body.token        
        const plantilla: any = {
            nombrePlantilla: req.body.nombrePlantilla,
            idCoraza: req.body.idCoraza,
            idGlifo1: req.body.idGlifo1,
            idGlifo2: req.body.idGlifo2,
            idGlifo3: req.body.idGlifo3,
            idGuantes: req.body.idGuantes,
            idGlifo4: req.body.idGlifo4,
            idGlifo5: req.body.idGlifo5,
            idGlifo6: req.body.idGlifo6,
            idPantalones: req.body.idPantalones,
            idGlifo7: req.body.idGlifo7,
            idGlifo8: req.body.idGlifo8,
            idGlifo9: req.body.idGlifo9,
            idBotas: req.body.idBotas,
            idGlifo10: req.body.idGlifo10,
            idGlifo11: req.body.idGlifo11,
            idGlifo12: req.body.idGlifo12,
            idEspadaAcero: req.body.idEspadaAcero,
            idRuna1: req.body.idRuna1,
            idRuna2: req.body.idRuna2,
            idRuna3: req.body.idRuna3,
            idEspadaPlata: req.body.idEspadaPlata,
            idRuna4: req.body.idRuna4,
            idRuna5: req.body.idRuna5,
            idRuna6: req.body.idRuna6
        }
        res.json(await plantillaUseCases.postPlantilla(token, plantilla));
    } catch (error) {            
        res.status(500).json({error: "Internal Server Error"})
    }
});

export default router;