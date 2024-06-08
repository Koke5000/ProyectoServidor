import executeQuery from "../../../context/db/PostgresConnection";
import Plantilla from "../../domain/Plantilla";
import PlantillaRepository from "../../domain/Plantilla.Repository";

export default class PlantillaRepositoryPostgres implements PlantillaRepository{
    async postPlantillaNombre(nombrePlantilla: string): Promise<number> {
        const plantillaDB = await executeQuery(`INSERT INTO public.plantillas(nombre) VALUES ('${nombrePlantilla}') RETURNING *;`);
        return plantillaDB[0].id;
    }
    async postPlantillaUsuario(id_plantilla: number, id_usuario: number) {
        await executeQuery(`INSERT INTO public.usuario_plantillas(usuario, plantilla) VALUES (${id_usuario}, ${id_plantilla});`);
    }
    async postPlantillaEspadas(id: number, espada_acero: number, runa1: number, runa2: number, runa3: number, espada_plata: number, runa4: number, runa5: number, runa6: number) {
        await executeQuery(`INSERT INTO public.espadas_plantilla(
            plantilla, espada_id, runa1, runa2, runa3)
            VALUES (${id}, ${espada_acero}, ${runa1}, ${runa2}, ${runa3});`);   
        await executeQuery(`INSERT INTO public.espadas_plantilla(
            plantilla, espada_id, runa1, runa2, runa3)
            VALUES (${id}, ${espada_plata}, ${runa4}, ${runa5}, ${runa6});`);   
    }
    async postPlantillaArmaduras(id: number, coraza: number, glifo1: number, glifo2: number, glifo3: number, guantes: number, glifo4: number, glifo5: number, glifo6: number, pantalones: number, glifo7: number, glifo8: number, glifo9: number, botas: number, glifo10: number, glifo11: number, glifo12: number) {
        await executeQuery(`INSERT INTO public.armaduras_plantilla(
            plantilla, armadura, glifo1, glifo2, glifo3)
            VALUES (${id}, ${coraza}, ${glifo1}, ${glifo2}, ${glifo3});`);
        await executeQuery(`INSERT INTO public.armaduras_plantilla(
            plantilla, armadura, glifo1, glifo2, glifo3)
            VALUES (${id}, ${guantes}, ${glifo4}, ${glifo5}, ${glifo6});`);    
        await executeQuery(`INSERT INTO public.armaduras_plantilla(
            plantilla, armadura, glifo1, glifo2, glifo3)
            VALUES (${id}, ${pantalones}, ${glifo7}, ${glifo8}, ${glifo9});`);    
        await executeQuery(`INSERT INTO public.armaduras_plantilla(
            plantilla, armadura, glifo1, glifo2, glifo3)
            VALUES (${id}, ${botas}, ${glifo10}, ${glifo11}, ${glifo12});`);                 
    }

    async getPlantillasUsuario(usuarioId: number): Promise<any[]> {
        const plantillas: Plantilla[] = [];
        const plantillasUsuarioDB: any[] = await executeQuery(`SELECT usuario, plantilla FROM public.usuario_plantillas WHERE usuario = ${usuarioId};`);
        for (const plantillaUsuarioDB of plantillasUsuarioDB) {
            const plantillaId = plantillaUsuarioDB.plantilla;
            const [plantillaNombreDB, plantillaArmaduras, plantillaEspadas] = await Promise.all([
                executeQuery(`SELECT id, nombre FROM public.plantillas WHERE id = ${plantillaId};`),
                executeQuery(`SELECT plantilla, armadura, glifo1, glifo2, glifo3 FROM public.armaduras_plantilla WHERE plantilla = ${plantillaId};`),
                executeQuery(`SELECT plantilla, espada_id, runa1, runa2, runa3 FROM public.espadas_plantilla WHERE plantilla = ${plantillaId};`)
            ]);
            const [armaduras, glifos, espadas, runas] = await Promise.all([
                executeQuery(`SELECT id, imagen FROM public.armaduras WHERE id IN (${plantillaArmaduras.map(a => a.armadura).join(',')});`),
                executeQuery(`SELECT id, imagen FROM public.glifos WHERE id IN (${plantillaArmaduras.map(a => [a.glifo1, a.glifo2, a.glifo3]).flat().join(',')});`),
                executeQuery(`SELECT id, imagen FROM public.espadas WHERE id IN (${plantillaEspadas.map(a => a.espada_id).join(',')});`),
                executeQuery(`SELECT id, imagen FROM public.runas WHERE id IN (${plantillaEspadas.map(a => [a.runa1, a.runa2, a.runa3]).flat().join(',')});`)
            ]);
            const plantilla: Plantilla = {
                id: plantillaNombreDB[0].id,
                nombrePlantilla: plantillaNombreDB[0].nombre,
                imgCoraza: armaduras.find(armadura => armadura.id === plantillaArmaduras[0].armadura).imagen,
                imgGlifo1: glifos.find(glifo => glifo.id === plantillaArmaduras[0].glifo1).imagen,
                imgGlifo2: glifos.find(glifo => glifo.id === plantillaArmaduras[0].glifo2).imagen,
                imgGlifo3: glifos.find(glifo => glifo.id === plantillaArmaduras[0].glifo3).imagen,
                imgGuantes: armaduras.find(armadura => armadura.id === plantillaArmaduras[1].armadura).imagen,
                imgGlifo4: glifos.find(glifo => glifo.id === plantillaArmaduras[1].glifo1).imagen,
                imgGlifo5: glifos.find(glifo => glifo.id === plantillaArmaduras[1].glifo2).imagen,
                imgGlifo6: glifos.find(glifo => glifo.id === plantillaArmaduras[1].glifo3).imagen,
                imgPantalones: armaduras.find(armadura => armadura.id === plantillaArmaduras[2].armadura).imagen,
                imgGlifo7: glifos.find(glifo => glifo.id === plantillaArmaduras[2].glifo1).imagen,
                imgGlifo8: glifos.find(glifo => glifo.id === plantillaArmaduras[2].glifo2).imagen,
                imgGlifo9: glifos.find(glifo => glifo.id === plantillaArmaduras[2].glifo3).imagen,
                imgBotas: armaduras.find(armadura => armadura.id === plantillaArmaduras[3].armadura).imagen,
                imgGlifo10: glifos.find(glifo => glifo.id === plantillaArmaduras[3].glifo1).imagen,
                imgGlifo11: glifos.find(glifo => glifo.id === plantillaArmaduras[3].glifo2).imagen,
                imgGlifo12: glifos.find(glifo => glifo.id === plantillaArmaduras[3].glifo3).imagen,
                imgEspadaAcero: espadas.find(espada => espada.id === plantillaEspadas[0].espada_id).imagen,
                imgRuna1: runas.find(runa => runa.id === plantillaEspadas[0].runa1).imagen,
                imgRuna2: runas.find(runa => runa.id === plantillaEspadas[0].runa2).imagen,
                imgRuna3: runas.find(runa => runa.id === plantillaEspadas[0].runa3).imagen,
                imgEspadaPlata: espadas.find(espada => espada.id === plantillaEspadas[1].espada_id).imagen,
                imgRuna4: runas.find(runa => runa.id === plantillaEspadas[1].runa1).imagen,
                imgRuna5: runas.find(runa => runa.id === plantillaEspadas[1].runa2).imagen,
                imgRuna6: runas.find(runa => runa.id === plantillaEspadas[1].runa3).imagen,
            };
            plantillas.push(plantilla);
        }
        return plantillas;
    }
    





    

}