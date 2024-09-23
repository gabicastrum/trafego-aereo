import { AeronaveComercial } from "./AeronaveComercial.js";

class AeronavePassageiros extends AeronaveComercial {
    #maxPassageiros;
    constructor(maxPassageiros, nomeCIA, prefixo, velocidadeCruzeiro, autonomia) {
        super(nomeCIA, prefixo, velocidadeCruzeiro, autonomia);
        this.#maxPassageiros = maxPassageiros
    }
    //Pegar o número máximo de passageiros 
    getMaxPassageiros() {
        return this.#maxPassageiros;
    }
    // Retornar objeto em forma de string
    toString() {
        return `Aeronave Passageiros: NomeCIA = ${this.getNomeCIA()}, Prefixo = ${this.getPrefixo()}, Velocidade Cruzeiro = ${this.getVelocidadeCruzeiro()}, Autonomia = ${this.getAutonomia()}, Máxima de Passageiros = ${this.getMaxPassageiros()}`;
    }
}

export { AeronavePassageiros as AeronavePassageiros };