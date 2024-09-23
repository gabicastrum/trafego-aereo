class ServicoPilotos {
    #pilotos;
    constructor() {
        this.#pilotos = []
    }
    // Função para recuperar o piloto pela matrícula 
    recupera(matricula) {
        // Encontrando um piloto dentro do array pilotos pela matrícula recebida paramêtro. 
        const piloto = this.#pilotos.find(piloto => piloto.getMatricula() == matricula)
        if (!piloto) {
            // Erro é lançado quando um piloto não é encontrado.
            throw new Error("Piloto não encontrado.")
        }
        // retornando piloto encontrado
        return piloto
    }
    todos() {
        return this.#pilotos
    }
    adicionar(piloto) {
        this.#pilotos.push(piloto);
    }
}

export { ServicoPilotos as ServicoPilotos };