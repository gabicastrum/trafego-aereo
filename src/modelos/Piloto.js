class Piloto {
    #nome;
    #matricula;
    #habilitacaoAtiva;
    // Construtor da classe Piloto
    constructor(nome, matricula, habilitacaoAtiva) {
        this.#nome = nome;
        this.#matricula = matricula;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }
    // Função para pegar atributo privado matrícula
    getMatricula() {
        return this.#matricula;
    }
    // Função para pegar atributo privado nome
    getNome() {
        return this.#nome;
    }
    // Função para pegar atributo privado habilitacaoAtiva
    getHabilitacaoAtiva() {
        return this.#habilitacaoAtiva;
    }
    // Retornar objeto em forma de string
    toString() {
        return `Piloto: Nome = ${this.#nome}, Matricula = ${this.#matricula}, Habilitacao: ${this.#habilitacaoAtiva ? 'Ativa' : 'Inativa'}`
    }
}

export { Piloto as Piloto };