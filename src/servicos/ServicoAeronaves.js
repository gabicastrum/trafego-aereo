class ServicoAeronaves {
    #aeronaves;
    constructor() {
        this.#aeronaves = []
    }

    todas() {
        return this.#aeronaves
    }

    recupera(prefixo) {
        const aeronave = this.#aeronaves.find(
            (aeronave) => aeronave.getPrefixo() === prefixo
        );
        if (!aeronave) {
            throw new Error("Aeronave não encontrada.");
        }
        return aeronave;
    }

    adicionar(aeronave) {
        this.#aeronaves.push(aeronave);
    }
}

export { ServicoAeronaves as ServicoAeronaves };