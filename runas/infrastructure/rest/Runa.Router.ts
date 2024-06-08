import express from "express";
import RunaUseCases from "../../application/Runa.UseCases";
import RunaRepository from "../../domain/Runa.Repository";
import RunaRepositoryPostgres from "../db/Runa.Postgres";


const router = express.Router();
const runaRepository : RunaRepository = new RunaRepositoryPostgres();
const runaUseCases : RunaUseCases = new RunaUseCases(runaRepository);

router.get("/", async (req, res) => {
    try {
        res.json(await runaUseCases.getRunas());
    } catch (error) {    
        res.status(500).json({error: "Internal Server Error"})
    }
});

export default router;