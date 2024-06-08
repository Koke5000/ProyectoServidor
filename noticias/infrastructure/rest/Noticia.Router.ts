import express from "express";
import NoticiaRepositoryPostgres from "../db/Noticia.Postgres";
import NoticiaUseCases from "../../application/Noticia.UseCases";

const router = express.Router();
const noticiaUseCases : NoticiaUseCases = new NoticiaUseCases(new NoticiaRepositoryPostgres());

router.get("/main/:categoria/:pagina", async (req, res) => {
    try {
        res.json(await noticiaUseCases.getNoticiasMainCategoriaPagina(req.params.categoria, req.params.pagina));
    } catch (error) {        
        res.status(500).json({error: "Internal Server Error"})
    }
}); 

router.get("/numPaginas/:categoria", async (req, res) => {
    try {
        res.json({numPaginas : await noticiaUseCases.getNumPaginasNoticias(req.params.categoria)});
    } catch (error) {                
        res.status(500).json({error: "Internal Server Error"})
    }
}); 
router.get("/merchandising/:pagina", async (req, res) => {
    try {
        res.json(await noticiaUseCases.getNoticiasMerchandising(req.params.pagina));
    } catch (error) {        
        res.status(500).json({error: "Internal Server Error"})
    }
}); 
router.get("/numPaginasMerch", async (req, res) => {
    try {
        res.json({numPaginas : await noticiaUseCases.getNumPaginasMerchandising()});
    } catch (error) {                
        res.status(500).json({error: "Internal Server Error"})
    }
}); 

export default router;