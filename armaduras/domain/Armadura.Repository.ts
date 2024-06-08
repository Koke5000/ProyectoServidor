import Armadura from "./Armadura";

export default interface ArmaduraRepository{
    getArmadurasCoraza(): Promise<Armadura[]>;
    getArmadurasGuantes(): Promise<Armadura[]>;
    getArmadurasPantalones(): Promise<Armadura[]>;
    getArmadurasBotas(): Promise<Armadura[]>;

}