class Aerovia {
    #id;
    #origem;
    #destino;
    #tamanho;
    constructor(id, origem, destino, tamanho) {
        this.#id = id;
        this.#origem = origem;
        this.#destino = destino;
        this.#tamanho = tamanho;
    }
    getId() {
        // Recupera o id da Aerovia
        return this.#id;
    }
    getOrigem() {
        //Recupera o local de origem.
        return this.#origem;
    }
    getDestino() {
        //Recupera o local de destino.
        return this.#destino;
    }
    getTamanho() {
        //Recupera distância entre origem e destino em quilometros.
        return this.#tamanho;
    }
    // Retornar objeto em forma de string
    toString() {
        return `Aerovia: Id = ${this.getId()}, Origem = ${this.getOrigem()}, Destino = ${this.getDestino()}, Tamanho = ${this.getTamanho()}km`;
    }
}

export { Aerovia as Aerovia };