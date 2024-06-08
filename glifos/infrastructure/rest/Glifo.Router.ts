import express from "express";
import GlifoRepository from "../../domain/Glifo.Repository";
import GlifoUseCases from "../../application/Glifo.UseCases";
import GlifoRepositoryPostgres from "../db/Glifo.Postgres";

const router = express.Router();
const glifoRepository : GlifoRepository = new GlifoRepositoryPostgres();
const glifoUseCases : GlifoUseCases = new GlifoUseCases(glifoRepository);

router.get("/", async (req, res) => {
    try {
        res.json(await glifoUseCases.getGlifos());
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

export default router;
