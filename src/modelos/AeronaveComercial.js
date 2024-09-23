import { Aeronave } from "./Aeronave.js";

class AeronaveComercial extends Aeronave {
    #nomeCIA;
    constructor(nomeCIA, prefixo, velocidadeCruzeiro, autonomia) {
        super(prefixo, velocidadeCruzeiro, autonomia);
        this.#nomeCIA = nomeCIA;
    }
    //Pegar nome da companhia 
    getNomeCIA() {
        return this.#nomeCIA;
    }
}

export { AeronaveComercial as AeronaveComercial };