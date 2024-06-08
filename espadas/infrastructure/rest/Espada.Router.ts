import express from "express";
import EspadaUseCases from "../../application/Espada.UseCases";
import EspadaRepository from "../../domain/Espada.Repository";
import EspadaRepositoryPostgres from "../db/Espada.Postgres";

const router = express.Router();
const espadaRepository : EspadaRepository = new EspadaRepositoryPostgres();
const espadaUseCases : EspadaUseCases = new EspadaUseCases(espadaRepository);

router.get("/acero", async (req, res) => {
    try {
        res.json(await espadaUseCases.getEspadasAcero());
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.get("/plata", async (req, res) => {
    try {
        res.json(await espadaUseCases.getEspadasPlata());
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

export default router;
