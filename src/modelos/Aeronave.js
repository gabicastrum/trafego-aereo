class Aeronave {
    #prefixo;
    #velocidadeCruzeiro;
    #autonomia;
    // Construtor da classe Aeronave
    constructor(prefixo, velocidadeCruzeiro, autonomia) {
        this.#prefixo = prefixo;
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
        this.#autonomia = autonomia;
    }
    // Função para pegar atributo privado prefixo
    getPrefixo() {
        return this.#prefixo;
    }
    // Função para pegar atributo privado velocidadeCruzeiro
    getVelocidadeCruzeiro() {
        return this.#velocidadeCruzeiro;
    }
    // Função para pegar atributo privado autonomia
    getAutonomia() {
        return this.#autonomia;
    }
}

export { Aeronave as Aeronave };