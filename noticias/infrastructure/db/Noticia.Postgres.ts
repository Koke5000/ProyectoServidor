import executeQuery from "../../../context/db/PostgresConnection";
import Noticia from "../../domain/Noticia";
import NoticiaRepository from "../../domain/Noticia.Repository";

export default class NoticiaRepositoryPostgres implements NoticiaRepository{
 
    async getNoticiasMainCategoriaPagina(categoria: string, pagina: string): Promise<Noticia[]> {
        const noticias : Noticia[] = [];
        let consulta
        if(categoria === 'all'){
            consulta = `SELECT * FROM noticias WHERE categoria != 'Merchandising' LIMIT 6 OFFSET ${pagina} * 6`
        }else{
            consulta = `SELECT * FROM noticias WHERE categoria = '${categoria}' AND categoria != 'Merchandising'  LIMIT 6 OFFSET ${pagina} * 6`
        }
        const noticiasDB : any[] = await executeQuery(consulta);
        for (const noticiaDB of noticiasDB) {
            const noticia : Noticia = {
                id: noticiaDB.id,
                titulo: noticiaDB.titulo,
                autor: noticiaDB.autor,
                categoria: noticiaDB.categoria,
                url_imagen: noticiaDB.url_imagen,
                url_noticia: noticiaDB.url_noticia
            }
            noticias.push(noticia);
        }

        return noticias;
    }

    async getNumPaginasNoticias(categoria: string): Promise<Number> {
        let consulta        
        if (categoria === 'all') {
            consulta = "SELECT COUNT(*) AS total_noticias FROM noticias WHERE categoria != 'Merchandising';"
        } else {
            consulta = `SELECT COUNT(*) AS total_noticias FROM noticias WHERE categoria = '${categoria}' AND categoria != 'Merchandising';`
        }
        const noticiaDB : any = await executeQuery(consulta);     
        return Math.ceil(noticiaDB[0].total_noticias / 6);
    }

    async getNoticiasMerchandising(pagina: string): Promise<Noticia[]> {
        const noticias : Noticia[] = [];
        const noticiasDB : any[] = await executeQuery(`SELECT * FROM noticias WHERE categoria = 'Merchandising' LIMIT 3 OFFSET ${pagina} * 3`);
        for (const noticiaDB of noticiasDB) {
            const noticia : Noticia = {
                id: noticiaDB.id,
                titulo: noticiaDB.titulo,
                autor: noticiaDB.autor,
                categoria: noticiaDB.categoria,
                url_imagen: noticiaDB.url_imagen,
                url_noticia: noticiaDB.url_noticia
            }
            noticias.push(noticia);
        }

        return noticias;
    }

    async getNumPaginasMerchandising(): Promise<Number> {
        const noticiaDB : any = await executeQuery("SELECT COUNT(*) AS total_noticiasMerch FROM noticias WHERE categoria = 'Merchandising';");             
        return Math.ceil(noticiaDB[0].total_noticiasmerch / 3);
    }
    
}