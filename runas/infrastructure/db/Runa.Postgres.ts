import executeQuery from "../../../context/db/PostgresConnection";
import Runa from "../../domain/Runa";
import RunaRepository from "../../domain/Runa.Repository";

export default class RunaRepositoryPostgres implements RunaRepository{
    async getRunas(): Promise<Runa[]> {
        const runas : Runa[] = [];
        const runasDB : any[] = await executeQuery(`SELECT r.*, e.chance_to_cause_burning, e.attack_power, e.chance_to_cause_stagger, e.armor_piercing, e.chance_to_cause_stun, e.adrenaline_point_gain, e.sign_intensity, e.chance_to_cause_poison, e.chance_to_freeze, e.chance_to_cause_bleeding FROM runas r JOIN efectos_runas e ON r.id = e.runa;`);
        for (const runaDB of runasDB) {
            const runa : Runa = {
                id: runaDB.id,
                nombre: runaDB.nombre,
                imagen: runaDB.imagen,
                chance_to_cause_burning: runaDB.chance_to_cause_burning,
                attack_power: runaDB.attack_power,
                chance_to_cause_stagger: runaDB.chance_to_cause_stagger,
                armor_piercing: runaDB.armor_piercing,
                chance_to_cause_stun: runaDB.chance_to_cause_stun,
                adrenaline_point_gain: runaDB.adrenaline_point_gain,
                sign_intensity: runaDB.sign_intensity,
                chance_to_cause_poison: runaDB.chance_to_cause_poison,
                chance_to_freeze: runaDB.chance_to_freeze,
                chance_to_cause_bleeding: runaDB.chance_to_cause_bleeding
            }
            runas.push(runa);
        }
        

        return runas;
    }

}