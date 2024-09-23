import { AeronaveComercial } from "./AeronaveComercial.js";

class AeronaveCarga extends AeronaveComercial {
    #pesoMax;
    constructor(pesoMax, nomeCIA, prefixo, velocidadeCruzeiro, autonomia) {
        super(nomeCIA, prefixo, velocidadeCruzeiro, autonomia);
        this.#pesoMax = pesoMax;
    }
    //Função para pegar o peso máximo de carga em toneladas suportada pela aeronave 
    getPesoMax() {
        return this.#pesoMax;
    }
//Retornar o objeto em forma de string
    toString() {
        return `Aeronave Carga: NomeCIA = ${this.getNomeCIA()}, Prefixo = ${this.getPrefixo()}, Velocidade Cruzeiro = ${this.getVelocidadeCruzeiro()}, Autonomia = ${this.getAutonomia()}, Peso Máximo = ${this.getPesoMax()}`;
    }
}

export { AeronaveCarga as AeronaveCarga };