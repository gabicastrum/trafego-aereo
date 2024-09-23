class ServicoAerovias {
    #aerovias;
    constructor() {
        this.#aerovias = [];
    }
    recupera(origem, destino) {
        const aerovia = this.#aerovias.find(aerovia => aerovia.getOrigem() == origem && aerovia.getDestino() == destino);
        if (!aerovia) {
            throw new Error("Aerovia não identificada.");
        }
        return aerovia;
    }
    todas() {
        return this.#aerovias;
    }
    adicionar(aerovia) {
        this.#aerovias.push(aerovia);
    }
}

export { ServicoAerovias as ServicoAerovias };