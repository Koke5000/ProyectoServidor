import express from "express";
import ArmaduraUseCases from "../../application/Armadura.UseCases";
import ArmaduraRepository from "../../domain/Armadura.Repository";
import ArmaduraRepositoryPostgres from "../db/Armadura.Postgres";

const router = express.Router();
const armaduraRepository : ArmaduraRepository = new ArmaduraRepositoryPostgres();
const armaduraUseCases : ArmaduraUseCases = new ArmaduraUseCases(armaduraRepository);

router.get("/coraza", async (req, res) => {
    try {
        res.json(await armaduraUseCases.getArmadurasCoraza());
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.get("/guantes", async (req, res) => {
    try {
        res.json(await armaduraUseCases.getArmadurasGuantes());
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.get("/pantalones", async (req, res) => {
    try {
        res.json(await armaduraUseCases.getArmadurasPantalones());
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.get("/botas", async (req, res) => {
    try {
        res.json(await armaduraUseCases.getArmadurasBotas());
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

export default router;
