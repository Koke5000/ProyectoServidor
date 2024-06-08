import executeQuery from "../../../context/db/PostgresConnection";
import Glifo from "../../domain/Glifo";
import GlifoRepository from "../../domain/Glifo.Repository";

export default class GlifoRepositoryPostgres implements GlifoRepository{
    async getGlifos(): Promise<Glifo[]> {
        const glifos : Glifo[] = [];
        const glifosDB : any[] = await executeQuery(`SELECT g.*, e.aard_sign_intensity, e.axii_sign_intensity, e.igni_sign_intensity, e.quen_sign_intensity, e.yrden_sign_intensity, e.resistance_to_bleeding, e.vitality_regeneration, e.reduction_in_item_durability_loss, e.resistance_to_elemental_damage FROM glifos g JOIN efectos_glifos e ON g.id = e.glifo;`);
        for (const glifoDB of glifosDB) {
            const glifo : Glifo = {
                id: glifoDB.id,
                nombre: glifoDB.nombre,
                imagen: glifoDB.imagen,
                aard_sign_intensity : glifoDB.aard_sign_intensity,
                igni_sign_intensity : glifoDB.igni_sign_intensity,
                axii_sign_intensity : glifoDB.axii_sign_intensity,
                quen_sign_intensity : glifoDB.quen_sign_intensity,
                yrden_sign_intensity : glifoDB.yrden_sign_intensity,
                resistance_to_bleeding : glifoDB.resistance_to_bleeding,
                resistance_to_elemental_damage : glifoDB.resistance_to_elemental_damage,
                vitality_regeneration : glifoDB.vitality_regeneration,
                reduction_in_item_durability_loss : glifoDB.reduction_in_item_durability_loss 
            }
            glifos.push(glifo);
        }

        return glifos;
    }
    
}