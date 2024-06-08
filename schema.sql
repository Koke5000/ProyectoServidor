CREATE TABLE plantillas (
	id SERIAL PRIMARY KEY,
	nombre varchar(100)
);

CREATE TABLE espadas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    tipo VARCHAR(50),
    rareza VARCHAR(20),
    nivel INTEGER,
    peso DECIMAL(5,2),
    imagen VARCHAR(200)
);

CREATE TABLE atributos_espada (
    espada INTEGER REFERENCES espadas(id),
    critical_hit_damage_bonus INTEGER DEFAULT 0,
    critical_hit_chance INTEGER DEFAULT 0,
    chance_to_cause_bleeding INTEGER DEFAULT 0,
    chance_to_stagger INTEGER DEFAULT 0,
    chance_to_dismember INTEGER DEFAULT 0,
    chance_to_cause_burning INTEGER DEFAULT 0,
    chance_to_freeze INTEGER DEFAULT 0,
    chance_to_poison INTEGER DEFAULT 0,
    chance_to_stun INTEGER DEFAULT 0,
    chance_for_instant_kill INTEGER DEFAULT 0,
    bonus_experience_from_humans_and_nonhumans INTEGER DEFAULT 0,
    bonus_experience_from_monsters INTEGER DEFAULT 0,
    armor_piercing INTEGER DEFAULT 0,
    bonus_gold INTEGER DEFAULT 0,
    adrenaline_point_gain INTEGER DEFAULT 0,
    frost_damage INTEGER DEFAULT 0,
    fire_damage INTEGER DEFAULT 0,
    aard_sign_intensity INTEGER DEFAULT 0,
    igni_sign_intensity INTEGER DEFAULT 0,
    axii_sign_intensity INTEGER DEFAULT 0,
    yrden_sign_intensity INTEGER DEFAULT 0,
    quen_sign_intensity INTEGER DEFAULT 0,
    bludgeoning_damage INTEGER DEFAULT 0
);

CREATE TABLE runas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    imagen VARCHAR(200)
);

CREATE TABLE espadas_plantilla (
	plantilla INTEGER REFERENCES plantillas(id),
    espada_id INTEGER REFERENCES espadas(id),
    runa1 INTEGER REFERENCES runas(id),
    runa2 INTEGER REFERENCES runas(id),
    runa3 INTEGER REFERENCES runas(id)
);

CREATE TABLE efectos_runas (
    runa INTEGER REFERENCES runas(id),
    chance_to_cause_burning INTEGER DEFAULT 0,
    attack_power INTEGER DEFAULT 0,
    chance_to_cause_stagger INTEGER DEFAULT 0,
    chance_to_cause_poison INTEGER DEFAULT 0,
    chance_to_cause_stun INTEGER DEFAULT 0,
    chance_to_freeze INTEGER DEFAULT 0,
    chance_to_cause_bleeding INTEGER DEFAULT 0,
    adrenaline_point_gain INTEGER DEFAULT 0,
    sign_intensity INTEGER DEFAULT 0,
    armor_piercing INTEGER DEFAULT 0
);

CREATE TABLE armaduras (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    tipo VARCHAR(50),
    rareza VARCHAR(20),
    nivel INTEGER,
	clase_peso VARCHAR(20),
    peso DECIMAL(5,2),
    imagen VARCHAR(200)
);

CREATE TABLE glifos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    imagen VARCHAR(200)
);

CREATE TABLE armaduras_plantilla (
	plantilla INTEGER REFERENCES plantillas(id),
    armadura INTEGER REFERENCES armaduras(id),
    glifo1 INTEGER REFERENCES glifos(id),
    glifo2 INTEGER REFERENCES glifos(id),
    glifo3 INTEGER REFERENCES glifos(id)
);

CREATE TABLE efectos_glifos (
    glifo INTEGER REFERENCES glifos(id),
    aard_sign_intensity INTEGER DEFAULT 0,
    igni_sign_intensity INTEGER DEFAULT 0,
    axii_sign_intensity INTEGER DEFAULT 0,
    quen_sign_intensity INTEGER DEFAULT 0,
    yrden_sign_intensity INTEGER DEFAULT 0,
    resistance_to_bleeding INTEGER DEFAULT 0,
    resistance_to_elemental_damage INTEGER DEFAULT 0,
    vitality_regeneration INTEGER DEFAULT 0,
    reduction_in_item_durability_loss INTEGER DEFAULT 0
);


CREATE TABLE usuario_plantillas (
	usuario INTEGER REFERENCES usuarios(id),
    plantilla INTEGER REFERENCES plantillas(id)
);

CREATE TABLE atributos_armadura (
    armadura INT REFERENCES armaduras(id),
    vitality INTEGER DEFAULT 0,
    attack_power INTEGER DEFAULT 0,
    bludgeoning_defense INTEGER DEFAULT 0,
    piercing_defense INTEGER DEFAULT 0,
    slashing_defense INTEGER DEFAULT 0,
    resistance_to_piercing_damage INTEGER DEFAULT 0,
    resistance_to_bludgeoning_damage INTEGER DEFAULT 0,
    resistance_to_slashing_damage INTEGER DEFAULT 0,
    resistance_to_elemental_damage INTEGER DEFAULT 0,
    resistance_to_damage_from_monsters INTEGER DEFAULT 0,
    resistance_to_poisoning INTEGER DEFAULT 0,
    resistance_to_burning INTEGER DEFAULT 0,
    resistance_to_bleeding INTEGER DEFAULT 0,
    sign_intensity INTEGER DEFAULT 0,
    adrenaline_point_gain INTEGER DEFAULT 0,
    crafting_hit_chance INTEGER DEFAULT 0,
    damage_dealt_returned_as_vitality INTEGER DEFAULT 0,
    toxicity INTEGER DEFAULT 0,
    maximum_toxicity INTEGER DEFAULT 0,
    chance_to_deflect_projectiles_with_quen INTEGER DEFAULT 0,
    aard_sign_intensity INTEGER DEFAULT 0,
    igni_sign_intensity INTEGER DEFAULT 0,
    axii_sign_intensity INTEGER DEFAULT 0,
    yrden_sign_intensity INTEGER DEFAULT 0,
    quen_sign_intensity INTEGER DEFAULT 0,
    critical_hit_chance INTEGER DEFAULT 0,
    critical_hit_damage_bonus INTEGER DEFAULT 0,
    chance_to_find_additional_herbs INTEGER DEFAULT 0,
    bonus_gold INTEGER DEFAULT 0,
    armor_piercing INTEGER DEFAULT 0
);


