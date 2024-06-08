import Noticia from "../domain/Noticia";
import NoticiaRepository from "../domain/Noticia.Repository";

export default class NoticiaUseCases{

    private noticiaRepository : NoticiaRepository;

    constructor(noticiaRepository : NoticiaRepository){
        this.noticiaRepository = noticiaRepository;
    }

    async getNoticiasMainCategoriaPagina(categoria:string, pagina: string): Promise<Noticia[]>{
        return this.noticiaRepository.getNoticiasMainCategoriaPagina(categoria, pagina);
    }

    async getNumPaginasNoticias(categoria: string): Promise<Number>{
        return this.noticiaRepository.getNumPaginasNoticias(categoria);
    }

    async getNoticiasMerchandising(pagina: string): Promise<Noticia[]>{
        return this.noticiaRepository.getNoticiasMerchandising(pagina);
    }

    async getNumPaginasMerchandising(): Promise<Number>{
        return this.noticiaRepository.getNumPaginasMerchandising();
    }

}