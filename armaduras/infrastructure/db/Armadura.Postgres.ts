import executeQuery from "../../../context/db/PostgresConnection";
import Armadura from "../../domain/Armadura";
import ArmaduraRepository from "../../domain/Armadura.Repository";

export default class ArmaduraRepositoryPostgres implements ArmaduraRepository{

    async getArmadurasCoraza(): Promise<Armadura[]> {
        const armaduras : Armadura[] = [];
        const armadurasDB : any[] = await executeQuery(`SELECT a.*, at.vitality, at.attack_power, at.bludgeoning_defense,
        at.piercing_defense, at.slashing_defense, at.resistance_to_piercing_damage, at.resistance_to_bludgeoning_damage, 
        at.resistance_to_slashing_damage, at.resistance_to_elemental_damage, at.resistance_to_damage_from_monsters, 
        at.resistance_to_poisoning, at.resistance_to_burning, at.resistance_to_bleeding, at.sign_intensity, 
        at.adrenaline_point_gain, at.crafting_hit_chance, at.damage_dealt_returned_as_vitality, at.toxicity, 
        at.maximum_toxicity, at.chance_to_deflect_projectiles_with_quen, at.aard_sign_intensity, at.igni_sign_intensity, 
        at.axii_sign_intensity, at.yrden_sign_intensity, at.quen_sign_intensity, at.critical_hit_chance, 
        at.critical_hit_damage_bonus, at.chance_to_find_additional_herbs, at.bonus_gold, at.armor_piercing 
        FROM armaduras a JOIN atributos_armadura at ON a.id = at.armadura WHERE a.tipo = 'coraza';`);

        for (const armaduraDB of armadurasDB) {
            const armadura: Armadura = {
                id: armaduraDB.id,
                nombre: armaduraDB.nombre,
                tipo: armaduraDB.tipo,
                rareza: armaduraDB.rareza,
                nivel: armaduraDB.nivel,
                clase_peso: armaduraDB.clase_peso,
                peso: armaduraDB.peso,
                imagen: armaduraDB.imagen,
                vitality: armaduraDB.vitality,
                attack_power: armaduraDB.attack_power,
                bludgeoning_defense: armaduraDB.bludgeoning_defense,
                piercing_defense: armaduraDB.piercing_defense,
                slashing_defense: armaduraDB.slashing_defense,
                resistance_to_piercing_damage: armaduraDB.resistance_to_piercing_damage,
                resistance_to_bludgeoning_damage: armaduraDB.resistance_to_bludgeoning_damage,
                resistance_to_slashing_damage: armaduraDB.resistance_to_slashing_damage,
                resistance_to_elemental_damage: armaduraDB.resistance_to_elemental_damage,
                resistance_to_damage_from_monsters: armaduraDB.resistance_to_damage_from_monsters,
                resistance_to_poisoning: armaduraDB.resistance_to_poisoning,
                resistance_to_burning: armaduraDB.resistance_to_burning,
                resistance_to_bleeding: armaduraDB.resistance_to_bleeding,
                sign_intensity: armaduraDB.sign_intensity,
                adrenaline_point_gain: armaduraDB.adrenaline_point_gain,
                crafting_hit_chance: armaduraDB.crafting_hit_chance,
                damage_dealt_returned_as_vitality: armaduraDB.damage_dealt_returned_as_vitality,
                toxicity: armaduraDB.toxicity,
                maximum_toxicity: armaduraDB.maximum_toxicity,
                chance_to_deflect_projectiles_with_quen: armaduraDB.chance_to_deflect_projectiles_with_quen,
                aard_sign_intensity: armaduraDB.aard_sign_intensity,
                igni_sign_intensity: armaduraDB.igni_sign_intensity,
                axii_sign_intensity: armaduraDB.axii_sign_intensity,
                yrden_sign_intensity: armaduraDB.yrden_sign_intensity,
                quen_sign_intensity: armaduraDB.quen_sign_intensity,
                critical_hit_chance: armaduraDB.critical_hit_chance,
                critical_hit_damage_bonus: armaduraDB.critical_hit_damage_bonus,
                chance_to_find_additional_herbs: armaduraDB.chance_to_find_additional_herbs,
                bonus_gold: armaduraDB.bonus_gold,
                armor_piercing: armaduraDB.armor_piercing
            }
            armaduras.push(armadura);
        }

        return armaduras;   
    }
    async getArmadurasGuantes(): Promise<Armadura[]> {
        const armaduras : Armadura[] = [];
        const armadurasDB : any[] = await executeQuery(`SELECT a.*, at.vitality, at.attack_power, at.bludgeoning_defense,
        at.piercing_defense, at.slashing_defense, at.resistance_to_piercing_damage, at.resistance_to_bludgeoning_damage, 
        at.resistance_to_slashing_damage, at.resistance_to_elemental_damage, at.resistance_to_damage_from_monsters, 
        at.resistance_to_poisoning, at.resistance_to_burning, at.resistance_to_bleeding, at.sign_intensity, 
        at.adrenaline_point_gain, at.crafting_hit_chance, at.damage_dealt_returned_as_vitality, at.toxicity, 
        at.maximum_toxicity, at.chance_to_deflect_projectiles_with_quen, at.aard_sign_intensity, at.igni_sign_intensity, 
        at.axii_sign_intensity, at.yrden_sign_intensity, at.quen_sign_intensity, at.critical_hit_chance, 
        at.critical_hit_damage_bonus, at.chance_to_find_additional_herbs, at.bonus_gold, at.armor_piercing 
        FROM armaduras a JOIN atributos_armadura at ON a.id = at.armadura WHERE a.tipo = 'guantes';
        `);
        for (const armaduraDB of armadurasDB) {
            const armadura: Armadura = {
                id: armaduraDB.id,
                nombre: armaduraDB.nombre,
                tipo: armaduraDB.tipo,
                rareza: armaduraDB.rareza,
                nivel: armaduraDB.nivel,
                clase_peso: armaduraDB.clase_peso,
                peso: armaduraDB.peso,
                imagen: armaduraDB.imagen,
                vitality: armaduraDB.vitality,
                attack_power: armaduraDB.attack_power,
                bludgeoning_defense: armaduraDB.bludgeoning_defense,
                piercing_defense: armaduraDB.piercing_defense,
                slashing_defense: armaduraDB.slashing_defense,
                resistance_to_piercing_damage: armaduraDB.resistance_to_piercing_damage,
                resistance_to_bludgeoning_damage: armaduraDB.resistance_to_bludgeoning_damage,
                resistance_to_slashing_damage: armaduraDB.resistance_to_slashing_damage,
                resistance_to_elemental_damage: armaduraDB.resistance_to_elemental_damage,
                resistance_to_damage_from_monsters: armaduraDB.resistance_to_damage_from_monsters,
                resistance_to_poisoning: armaduraDB.resistance_to_poisoning,
                resistance_to_burning: armaduraDB.resistance_to_burning,
                resistance_to_bleeding: armaduraDB.resistance_to_bleeding,
                sign_intensity: armaduraDB.sign_intensity,
                adrenaline_point_gain: armaduraDB.adrenaline_point_gain,
                crafting_hit_chance: armaduraDB.crafting_hit_chance,
                damage_dealt_returned_as_vitality: armaduraDB.damage_dealt_returned_as_vitality,
                toxicity: armaduraDB.toxicity,
                maximum_toxicity: armaduraDB.maximum_toxicity,
                chance_to_deflect_projectiles_with_quen: armaduraDB.chance_to_deflect_projectiles_with_quen,
                aard_sign_intensity: armaduraDB.aard_sign_intensity,
                igni_sign_intensity: armaduraDB.igni_sign_intensity,
                axii_sign_intensity: armaduraDB.axii_sign_intensity,
                yrden_sign_intensity: armaduraDB.yrden_sign_intensity,
                quen_sign_intensity: armaduraDB.quen_sign_intensity,
                critical_hit_chance: armaduraDB.critical_hit_chance,
                critical_hit_damage_bonus: armaduraDB.critical_hit_damage_bonus,
                chance_to_find_additional_herbs: armaduraDB.chance_to_find_additional_herbs,
                bonus_gold: armaduraDB.bonus_gold,
                armor_piercing: armaduraDB.armor_piercing
            }
            armaduras.push(armadura);
        }

        return armaduras; 
    }
    async getArmadurasPantalones(): Promise<Armadura[]> {
        const armaduras : Armadura[] = [];
        const armadurasDB : any[] = await executeQuery(`SELECT a.*, at.vitality, at.attack_power, at.bludgeoning_defense,
        at.piercing_defense, at.slashing_defense, at.resistance_to_piercing_damage, at.resistance_to_bludgeoning_damage, 
        at.resistance_to_slashing_damage, at.resistance_to_elemental_damage, at.resistance_to_damage_from_monsters, 
        at.resistance_to_poisoning, at.resistance_to_burning, at.resistance_to_bleeding, at.sign_intensity, 
        at.adrenaline_point_gain, at.crafting_hit_chance, at.damage_dealt_returned_as_vitality, at.toxicity, 
        at.maximum_toxicity, at.chance_to_deflect_projectiles_with_quen, at.aard_sign_intensity, at.igni_sign_intensity, 
        at.axii_sign_intensity, at.yrden_sign_intensity, at.quen_sign_intensity, at.critical_hit_chance, 
        at.critical_hit_damage_bonus, at.chance_to_find_additional_herbs, at.bonus_gold, at.armor_piercing 
        FROM armaduras a JOIN atributos_armadura at ON a.id = at.armadura WHERE a.tipo = 'pantalones';
        `);
        for (const armaduraDB of armadurasDB) {
            const armadura: Armadura = {
                id: armaduraDB.id,
                nombre: armaduraDB.nombre,
                tipo: armaduraDB.tipo,
                rareza: armaduraDB.rareza,
                nivel: armaduraDB.nivel,
                clase_peso: armaduraDB.clase_peso,
                peso: armaduraDB.peso,
                imagen: armaduraDB.imagen,
                vitality: armaduraDB.vitality,
                attack_power: armaduraDB.attack_power,
                bludgeoning_defense: armaduraDB.bludgeoning_defense,
                piercing_defense: armaduraDB.piercing_defense,
                slashing_defense: armaduraDB.slashing_defense,
                resistance_to_piercing_damage: armaduraDB.resistance_to_piercing_damage,
                resistance_to_bludgeoning_damage: armaduraDB.resistance_to_bludgeoning_damage,
                resistance_to_slashing_damage: armaduraDB.resistance_to_slashing_damage,
                resistance_to_elemental_damage: armaduraDB.resistance_to_elemental_damage,
                resistance_to_damage_from_monsters: armaduraDB.resistance_to_damage_from_monsters,
                resistance_to_poisoning: armaduraDB.resistance_to_poisoning,
                resistance_to_burning: armaduraDB.resistance_to_burning,
                resistance_to_bleeding: armaduraDB.resistance_to_bleeding,
                sign_intensity: armaduraDB.sign_intensity,
                adrenaline_point_gain: armaduraDB.adrenaline_point_gain,
                crafting_hit_chance: armaduraDB.crafting_hit_chance,
                damage_dealt_returned_as_vitality: armaduraDB.damage_dealt_returned_as_vitality,
                toxicity: armaduraDB.toxicity,
                maximum_toxicity: armaduraDB.maximum_toxicity,
                chance_to_deflect_projectiles_with_quen: armaduraDB.chance_to_deflect_projectiles_with_quen,
                aard_sign_intensity: armaduraDB.aard_sign_intensity,
                igni_sign_intensity: armaduraDB.igni_sign_intensity,
                axii_sign_intensity: armaduraDB.axii_sign_intensity,
                yrden_sign_intensity: armaduraDB.yrden_sign_intensity,
                quen_sign_intensity: armaduraDB.quen_sign_intensity,
                critical_hit_chance: armaduraDB.critical_hit_chance,
                critical_hit_damage_bonus: armaduraDB.critical_hit_damage_bonus,
                chance_to_find_additional_herbs: armaduraDB.chance_to_find_additional_herbs,
                bonus_gold: armaduraDB.bonus_gold,
                armor_piercing: armaduraDB.armor_piercing
            }
            armaduras.push(armadura);
        }

        return armaduras; 
    }
    async getArmadurasBotas(): Promise<Armadura[]> {
        const armaduras : Armadura[] = [];
        const armadurasDB : any[] = await executeQuery(`SELECT a.*, at.vitality, at.attack_power, at.bludgeoning_defense,
        at.piercing_defense, at.slashing_defense, at.resistance_to_piercing_damage, at.resistance_to_bludgeoning_damage, 
        at.resistance_to_slashing_damage, at.resistance_to_elemental_damage, at.resistance_to_damage_from_monsters, 
        at.resistance_to_poisoning, at.resistance_to_burning, at.resistance_to_bleeding, at.sign_intensity, 
        at.adrenaline_point_gain, at.crafting_hit_chance, at.damage_dealt_returned_as_vitality, at.toxicity, 
        at.maximum_toxicity, at.chance_to_deflect_projectiles_with_quen, at.aard_sign_intensity, at.igni_sign_intensity, 
        at.axii_sign_intensity, at.yrden_sign_intensity, at.quen_sign_intensity, at.critical_hit_chance, 
        at.critical_hit_damage_bonus, at.chance_to_find_additional_herbs, at.bonus_gold, at.armor_piercing 
        FROM armaduras a JOIN atributos_armadura at ON a.id = at.armadura WHERE a.tipo = 'botas';
        `);
        for (const armaduraDB of armadurasDB) {
            const armadura: Armadura = {
                id: armaduraDB.id,
                nombre: armaduraDB.nombre,
                tipo: armaduraDB.tipo,
                rareza: armaduraDB.rareza,
                nivel: armaduraDB.nivel,
                clase_peso: armaduraDB.clase_peso,
                peso: armaduraDB.peso,
                imagen: armaduraDB.imagen,
                vitality: armaduraDB.vitality,
                attack_power: armaduraDB.attack_power,
                bludgeoning_defense: armaduraDB.bludgeoning_defense,
                piercing_defense: armaduraDB.piercing_defense,
                slashing_defense: armaduraDB.slashing_defense,
                resistance_to_piercing_damage: armaduraDB.resistance_to_piercing_damage,
                resistance_to_bludgeoning_damage: armaduraDB.resistance_to_bludgeoning_damage,
                resistance_to_slashing_damage: armaduraDB.resistance_to_slashing_damage,
                resistance_to_elemental_damage: armaduraDB.resistance_to_elemental_damage,
                resistance_to_damage_from_monsters: armaduraDB.resistance_to_damage_from_monsters,
                resistance_to_poisoning: armaduraDB.resistance_to_poisoning,
                resistance_to_burning: armaduraDB.resistance_to_burning,
                resistance_to_bleeding: armaduraDB.resistance_to_bleeding,
                sign_intensity: armaduraDB.sign_intensity,
                adrenaline_point_gain: armaduraDB.adrenaline_point_gain,
                crafting_hit_chance: armaduraDB.crafting_hit_chance,
                damage_dealt_returned_as_vitality: armaduraDB.damage_dealt_returned_as_vitality,
                toxicity: armaduraDB.toxicity,
                maximum_toxicity: armaduraDB.maximum_toxicity,
                chance_to_deflect_projectiles_with_quen: armaduraDB.chance_to_deflect_projectiles_with_quen,
                aard_sign_intensity: armaduraDB.aard_sign_intensity,
                igni_sign_intensity: armaduraDB.igni_sign_intensity,
                axii_sign_intensity: armaduraDB.axii_sign_intensity,
                yrden_sign_intensity: armaduraDB.yrden_sign_intensity,
                quen_sign_intensity: armaduraDB.quen_sign_intensity,
                critical_hit_chance: armaduraDB.critical_hit_chance,
                critical_hit_damage_bonus: armaduraDB.critical_hit_damage_bonus,
                chance_to_find_additional_herbs: armaduraDB.chance_to_find_additional_herbs,
                bonus_gold: armaduraDB.bonus_gold,
                armor_piercing: armaduraDB.armor_piercing
            }
            armaduras.push(armadura);
        }

        return armaduras; 
    }

}