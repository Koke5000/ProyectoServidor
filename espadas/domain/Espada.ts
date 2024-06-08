import Runa from "../../runas/domain/Runa";

export default interface Espada{
//  ------------------
//  espada
//  ------------------
    id?: number, 
    nombre: string, 
    tipo: string, 
    rareza: string, 
    nivel: number, 
    peso: number, 
    imagen: string, 
//  ------------------
//  atributos_espada
//  ------------------
critical_hit_damage_bonus: number, 
    critical_hit_chance: number, 
    chance_to_cause_bleeding: number, 
    chance_to_stagger: number, 
    chance_to_dismember: number, 
    chance_to_cause_burning: number, 
    chance_to_freeze: number, 
    chance_to_poison: number, 
    chance_to_stun: number, 
    chance_for_instant_kill: number,
    bonus_experience_from_humans_and_nonhumans: number, 
    bonus_experience_from_monsters: number,
    armor_piercing: number, 
    bonus_gold: number, 
    adrenaline_point_gain: number, 
    frost_damage: number, 
    fire_damage: number, 
    aard_sign_intensity: number, 
    igni_sign_intensity: number, 
    axii_sign_intensity: number, 
    yrden_sign_intensity: number, 
    quen_sign_intensity: number,
    bludgeoning_damage: number
//  ------------------
}