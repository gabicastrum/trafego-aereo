class ServicoPlanos {
    #planos;
    #ocupacaoAerovia;
    constructor() {
        this.#planos = [];
        this.#ocupacaoAerovia = new OcupacaoAerovia();
    }
    // Função para adicionar um novo plano de voo.
    consiste(plano) {
        plano.setId(this.#planos.length + 1);
        this.#planos.push(plano);

        return plano;
    }
    // Função para recuperar um plano de voo pelo ID.
    recupera(id) {
        const plano = this.#planos.find(plano => plano.getId() === id);
        if (!plano) {
            throw new Error("Plano de voo não encontrado.");
        }
        return plano;
    }
   
    cancelar(id) {
        const plano = this.recupera(id);
        // Verificar se o plano de voo já está cancelado.
        if (plano.getCancelado()) {
            throw new Error("Plano de voo já está cancelado.");
        }
        // Cancelar o plano de voo.
        plano.setCancelado(true);
        // Liberar a altitude e os slots.
        this.#ocupacaoAerovia.adicionarAltitudeLivre(plano.getAerovia().getId(), plano.getData(), plano.getAltitude());
    }

    cancelarPlano(id) {
        const plano = this.recupera(id);
        // Verificar se o plano de voo já está cancelado.
        if (plano.getCancelado()) {
            throw new Error("Plano de voo já está cancelado.");
        }
        plano.setCancelado(true);
    }

    // Função para listar todos os planos de voo.
    listar() {
        return this.#planos;
    }
}

export { ServicoPlanos as ServicoPlanos };