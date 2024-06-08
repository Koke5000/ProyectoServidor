import Noticia from "./Noticia";

export default interface NoticiaRepository{
    getNoticiasMainCategoriaPagina(categoria: string, pagina: string):Promise<Noticia[]>
    getNumPaginasNoticias(categoria: string):Promise<Number>

    getNoticiasMerchandising(pagina: string):Promise<Noticia[]>
    getNumPaginasMerchandising():Promise<Number>

}