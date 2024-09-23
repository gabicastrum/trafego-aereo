import { ServicoAerovias } from "../../src/servicos/ServicoAerovias.js";
import { Aerovia } from "../../src/modelos/Aerovia.js";

describe('ServicoAerovias', () => {
    let servicoAerovias;

    beforeEach(() => {
        servicoAerovias = new ServicoAerovias();
        // Cadastro aerovias
        servicoAerovias.adicionar(new Aerovia("POA-FLO", "Porto Alegre(POA)", "Florianópolis(FLO)", 500))
        servicoAerovias.adicionar(new Aerovia("FLO-CWB", "Florianópolis(FLO)", "Curitiba(CWB)", 300))
        servicoAerovias.adicionar(new Aerovia("CWB-GRU", "Curitiba(CWB)", "São Paulo (GRU)", 400))
        servicoAerovias.adicionar(new Aerovia("GRU-POA", "São Paulo (GRU)", "Porto Alegre(POA)", 1000))
    });

    it('deve buscar todas as aerovias', () => {
        const todasAerovias = servicoAerovias.todas();
        expect(todasAerovias.length).toBe(4); 
    });

    it('Deve achar aerovia POA-FLO', () => {
        const aeroviaEncontrada = servicoAerovias.recupera("Porto Alegre(POA)", "Florianópolis(FLO)");
        expect(aeroviaEncontrada.getId()).toBe("POA-FLO");
    });

});