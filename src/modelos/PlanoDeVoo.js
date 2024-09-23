class PlanoDeVoo {
    #id;
    #matriculaPiloto;
    #prefixoAeronave;
    #data;
    #horario;
    #aerovia;
    #altitude;
    #slots;
    #cancelado;
    constructor(id, matriculaPiloto, prefixoAeronave, data, horario, aerovia, altitude, slots, cancelado) {
        this.#id = id;
        this.#matriculaPiloto = matriculaPiloto;
        this.#prefixoAeronave = prefixoAeronave;
        this.#data = data;
        this.#horario = horario;
        this.#aerovia = aerovia;
        this.#altitude = altitude;
        this.#slots = slots;
        this.#cancelado = cancelado;
    }
    // Função para pegar atributo privado id
    getId() {
        return this.#id;
    }
    // Função para pegar atributo privado matriculaPiloto
    getMatriculaPiloto() {
        return this.#matriculaPiloto;
    }
    // Função para pegar atributo privado prefixoAeronave
    getPrefixoAeronave() {
        return this.#prefixoAeronave;
    }
    // Função para pegar atributo privado data
    getData() {
        return this.#data;
    }
    // Função para pegar atributo privado horario
    getHorario() {
        return this.#horario;
    }
    // Função para pegar atributo privado aerovia
    getAerovia() {
        return this.#aerovia;
    }
    // Função para pegar atributo privado altitude
    getAltitude() {
        return this.#altitude;
    }
    // Função para pegar atributo privado slots
    getSlots() {
        return this.#slots;
    }
    // Função para pegar atributo privado cancelado
    getCancelado() {
        return this.#cancelado;
    }
    // Função para definir o atributo privado cancelado
    setCancelado(cancelado) {
        this.#cancelado = cancelado;
    }
    // Função para retornar o objeto em formato de string
    toString() {
        return `Plano de Voo: Id = ${this.#id}, Matricula Piloto = ${this.#matriculaPiloto}, Prefixo Aeronave = ${this.#prefixoAeronave}, Data = ${this.#data}, Horario = ${this.#horario}, Aerovia = ${this.#aerovia}, Altitude = ${this.#altitude}, Slots = ${this.#slots}, Cancelado = ${this.#cancelado}`;
    }
}
export { PlanoDeVoo as PlanoDeVoo };