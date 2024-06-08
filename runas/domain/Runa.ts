export default interface Runa{
//  ------------------
//  runa
//  ------------------
    id?: number, 
    nombre: string, 
    imagen: string,
//  ------------------
//  efectos_runa
//  ------------------
    chance_to_cause_burning: number,
    attack_power: number,
    chance_to_cause_stagger: number,
    armor_piercing: number,
    chance_to_cause_stun: number,
    adrenaline_point_gain: number,
    sign_intensity: number,
    chance_to_cause_poison: number,
    chance_to_freeze: number,
    chance_to_cause_bleeding: number,
//  ------------------
}