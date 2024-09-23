class OcupacaoAerovia {
    #altitudesLivres;
    #ocupacaoAerovia;
    constructor() {
        this.#altitudesLivres = new Map();
        this.#ocupacaoAerovia = new Map();
    }
    // Adicionar nova altitude livre para a aerovia.
    adicionarAltitudeLivre(idAerovia, data, altitude) {
        if (!this.#altitudesLivres.has(idAerovia)) {
            this.#altitudesLivres.set(idAerovia, new Map());
        }
        if (!this.#altitudesLivres.get(idAerovia).has(data)) {
            this.#altitudesLivres.get(idAerovia).set(data, []);
        }
        this.#altitudesLivres.get(idAerovia).get(data).push(altitude);
    }

    // Retorna as altitudes livres para a aerovia em uma data específica.
    altitudesLivres(idAerovia, data) {
        if (!this.#altitudesLivres.has(idAerovia)) {
            return [];
        }
        if (!this.#altitudesLivres.get(idAerovia).has(data)) {
            return [];
        }
        return this.#altitudesLivres.get(idAerovia).get(data);
    }

    // Ocupar uma altitude para a aerovia em uma data específica.
    ocupar(idAerovia, data, altitude, numero, slot) {
        if (!this.#ocupacaoAerovia.has(idAerovia)) {
            this.#ocupacaoAerovia.set(idAerovia, new Map());
        }
        if (!this.#ocupacaoAerovia.get(idAerovia).has(data)) {
            this.#ocupacaoAerovia.get(idAerovia).set(data, new Map());
        }
        if (!this.#ocupacaoAerovia.get(idAerovia).get(data).has(altitude)) {
            this.#ocupacaoAerovia.get(idAerovia).get(data).set(altitude, []);
        }
        this.#ocupacaoAerovia.get(idAerovia).get(data).get(altitude).push({ numero, slot });
    }

    // Verifica se a altitude está ocupada em uma data específica.
    isOcupado(idAerovia, data, altitude, numero, slot) {
        if (!this.#ocupacaoAerovia.has(idAerovia)) {
            return false;
        }
        if (!this.#ocupacaoAerovia.get(idAerovia).has(data)) {
            return false;
        }
        if (!this.#ocupacaoAerovia.get(idAerovia).get(data).has(altitude)) {
            return false;
        }
        const ocupacao = this.#ocupacaoAerovia.get(idAerovia).get(data).get(altitude);
        return ocupacao.some(o => o.numero === numero && o.slot === slot);
    }
}

export { OcupacaoAerovia as OcupacaoAerovia };