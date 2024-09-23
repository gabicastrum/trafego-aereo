import { Aeronave } from "./Aeronave.js";

class AeronaveParticular extends Aeronave {
    #respmanutencao;
    constructor(respmanutencao, prefixo, velocidadeCruzeiro, autonomia) {
        super(prefixo, velocidadeCruzeiro, autonomia);
        this.#respmanutencao = respmanutencao;
    }
    //Pegar informações da empresa responsável da manutenção
    getRespManutencao() {
        return this.#respmanutencao;
    }
    // Retornar objeto em forma de string
    toString() {
        return `Aeronave Particular: Prefixo = ${this.getPrefixo()}, Velocidade Cruzeiro = ${this.getVelocidadeCruzeiro()}, Autonomia = ${this.getAutonomia()}, Responsável Manutenção = ${this.getRespManutencao()}`;
    }
}

export { AeronaveParticular as AeronaveParticular };
