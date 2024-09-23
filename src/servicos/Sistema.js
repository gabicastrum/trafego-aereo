import { OcupacaoAerovia } from "../modelos/OcupacaoAerovia"
import { ServicoAerovias } from "./ServicoAerovias";
import { ServicoPilotos } from "./ServicoPilotos";
import { ServicoPlanos } from "./ServicoPlanos";
import { ServicoAeronaves } from "./ServicoAeronaves";

class Sistema {
    #ocupacaoAerovia;
    #servicoPilotos;
    #servicoAeronaves;
    #servicoAerovias;
    #servicoPlanos;

    constructor() {
        this.#ocupacaoAerovia = new OcupacaoAerovia();
        this.#servicoPilotos = new ServicoPilotos();
        this.#servicoAeronaves = new ServicoAeronaves();
        this.#servicoAerovias = new ServicoAerovias();
        this.#servicoPlanos = new ServicoPlanos();
    }

    listarAerovias() {
        return this.#servicoAerovias.todas();
    }

    listarAltitudesLivres(idAerovia, data = new Date()) {
        const altitudesLivres = this.#ocupacaoAerovia.altitudesLivres(
            idAerovia,
            data
        );

        if (altitudesLivres.length === 0) {
            console.log("Não há altitudes livres no momento.");
            return;
        }

        console.log("Altitudes livres:");
        altitudesLivres.forEach((altitude) => {
            console.log(`- ${altitude}`);
        });
    }

    listarPlanos() {
        return this.#servicoPlanos.listar();
    }

    // Função para criar um novo plano de voo.
    aprovarPlanoDeVoo(plano) {
        const piloto = this.#servicoPilotos.recupera(plano.getMatriculaPiloto());
        const aeronave = this.#servicoAeronaves.recupera(plano.getPrefixoAeronave());
        const aerovia = this.#servicoAerovias.recupera(plano.getAerovia().getOrigem(), plano.getAerovia().getDestino());
        // Verificar se a habilitação do piloto está ativa.
        if (!piloto.getHabilitacaoAtiva()) {
            throw new Error("A habilitação do piloto está inativa.");
        }
        // Verificar se a aeronave tem autonomia suficiente para voar o trecho.
        if (aeronave.getAutonomia() < (aerovia.getTamanho() * 1.1)) {
            throw new Error("A aeronave não tem autonomia suficiente para voar o trecho.");
        }
        // Verificar se a altitude está ocupada.
        if (this.#ocupacaoAerovia.isOcupado(aerovia.getId(), plano.getData(), plano.getAltitude(), plano.getSlots(), plano.getHorario())) {
            throw new Error("A altitude está ocupada.");
        }
        // Registrar a ocupação da altitude.
        this.#ocupacaoAerovia.ocupar(aerovia.getId(), plano.getData(), plano.getAltitude(), plano.getSlots(), plano.getHorario());
        // Aprovar o plano de voo.
        const novoPlano = this.#servicoPlanos.consite(plano);
        return novoPlano;
    }

    cancelar(id) {
        this.#servicoPlanos.cancelarPlano(id);
        // Liberar a altitude e os slots.
        this.#ocupacaoAerovia.adicionarAltitudeLivre(plano.getAerovia().getId(), plano.getData(), plano.getAltitude());
    }

}