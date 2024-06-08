import executeQuery from "../../../context/db/PostgresConnection";
import Espada from "../../domain/Espada";
import EspadaRepository from "../../domain/Espada.Repository";

export default class EspadaRepositoryPostgres implements EspadaRepository{
    async getEspadasAcero(): Promise<Espada[]> {
        const espadas : Espada[] = [];
        const espadasDB: any[] = await executeQuery(`SELECT e.*, a.critical_hit_damage_bonus, a.critical_hit_chance, a.chance_to_cause_bleeding, a.chance_to_stagger, a.chance_to_dismember, a.chance_to_cause_burning, a.chance_to_freeze, a.chance_to_poison, a.chance_to_stun, a.chance_for_instant_kill, a.bonus_experience_from_humans_and_nonhumans, a.bonus_experience_from_monsters, a.armor_piercing, a.bonus_gold, a.adrenaline_point_gain, a.frost_damage, a.fire_damage, a.aard_sign_intensity, a.igni_sign_intensity, a.axii_sign_intensity, a.yrden_sign_intensity, a.quen_sign_intensity, a.bludgeoning_damage FROM espadas e JOIN atributos_espada a ON e.id = a.espada WHERE e.tipo != 'plata';`);
        for (const espadaDB of espadasDB) {
            const espada : Espada = {
                id: espadaDB.id,
                nombre: espadaDB.nombre,
                tipo: espadaDB.tipo,
                rareza: espadaDB.rareza,
                nivel: espadaDB.nivel,
                peso: espadaDB.peso,
                imagen: espadaDB.imagen,
                critical_hit_damage_bonus: espadaDB.critical_hit_damage_bonus,
                critical_hit_chance: espadaDB.critical_hit_chance,
                chance_to_cause_bleeding: espadaDB.chance_to_cause_bleeding,
                chance_to_stagger: espadaDB.chance_to_stagger,
                chance_to_dismember: espadaDB.chance_to_dismember,
                chance_to_cause_burning: espadaDB.chance_to_cause_burning,
                chance_to_freeze: espadaDB.chance_to_freeze,
                chance_to_poison: espadaDB.chance_to_poison,
                chance_to_stun: espadaDB.chance_to_stun,
                chance_for_instant_kill: espadaDB.chance_for_instant_kill,
                bonus_experience_from_humans_and_nonhumans: espadaDB.bonus_experience_from_humans_and_nonhumans,
                bonus_experience_from_monsters: espadaDB.bonus_experience_from_monsters,
                armor_piercing: espadaDB.armor_piercing,
                bonus_gold: espadaDB.bonus_gold,
                adrenaline_point_gain: espadaDB.adrenaline_point_gain,
                frost_damage: espadaDB.frost_damage,
                fire_damage: espadaDB.fire_damage,
                aard_sign_intensity: espadaDB.aard_sign_intensity,
                igni_sign_intensity: espadaDB.igni_sign_intensity,
                axii_sign_intensity: espadaDB.axii_sign_intensity,
                yrden_sign_intensity: espadaDB.yrden_sign_intensity,
                quen_sign_intensity: espadaDB.quen_sign_intensity,
                bludgeoning_damage: espadaDB.bludgeoning_damage
            }
            espadas.push(espada);
        }

        return espadas;
    }
    async getEspadasPlata(): Promise<Espada[]> {
        const espadas : Espada[] = [];
        const espadasDB: any[] = await executeQuery(`SELECT e.*, a.critical_hit_damage_bonus, a.critical_hit_chance, a.chance_to_cause_bleeding, a.chance_to_stagger, a.chance_to_dismember, a.chance_to_cause_burning, a.chance_to_freeze, a.chance_to_poison, a.chance_to_stun, a.chance_for_instant_kill, a.bonus_experience_from_humans_and_nonhumans, a.bonus_experience_from_monsters, a.armor_piercing, a.bonus_gold, a.adrenaline_point_gain, a.frost_damage, a.fire_damage, a.aard_sign_intensity, a.igni_sign_intensity, a.axii_sign_intensity, a.yrden_sign_intensity, a.quen_sign_intensity, a.bludgeoning_damage FROM espadas e JOIN atributos_espada a ON e.id = a.espada WHERE e.tipo = 'plata';`);
        for (const espadaDB of espadasDB) {
            const espada: Espada = {
                id: espadaDB.id,
                nombre: espadaDB.nombre,
                tipo: espadaDB.tipo,
                rareza: espadaDB.rareza,
                nivel: espadaDB.nivel,
                peso: espadaDB.peso,
                imagen: espadaDB.imagen,
                critical_hit_damage_bonus: espadaDB.critical_hit_damage_bonus,
                critical_hit_chance: espadaDB.critical_hit_chance,
                chance_to_cause_bleeding: espadaDB.chance_to_cause_bleeding,
                chance_to_stagger: espadaDB.chance_to_stagger,
                chance_to_dismember: espadaDB.chance_to_dismember,
                chance_to_cause_burning: espadaDB.chance_to_cause_burning,
                chance_to_freeze: espadaDB.chance_to_freeze,
                chance_to_poison: espadaDB.chance_to_poison,
                chance_to_stun: espadaDB.chance_to_stun,
                chance_for_instant_kill: espadaDB.chance_for_instant_kill,
                bonus_experience_from_humans_and_nonhumans: espadaDB.bonus_experience_from_humans_and_nonhumans,
                bonus_experience_from_monsters: espadaDB.bonus_experience_from_monsters,
                armor_piercing: espadaDB.armor_piercing,
                bonus_gold: espadaDB.bonus_gold,
                adrenaline_point_gain: espadaDB.adrenaline_point_gain,
                frost_damage: espadaDB.frost_damage,
                fire_damage: espadaDB.fire_damage,
                aard_sign_intensity: espadaDB.aard_sign_intensity,
                igni_sign_intensity: espadaDB.igni_sign_intensity,
                axii_sign_intensity: espadaDB.axii_sign_intensity,
                yrden_sign_intensity: espadaDB.yrden_sign_intensity,
                quen_sign_intensity: espadaDB.quen_sign_intensity,
                bludgeoning_damage: espadaDB.bludgeoning_damage
            }
            espadas.push(espada);
        }

        return espadas;
    }

}