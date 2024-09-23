import { ServicoAeronaves } from "../../src/servicos/ServicoAeronaves.js";
import { AeronaveParticular } from "../../src/modelos/AeronaveParticular.js";
import { AeronaveCarga } from "../../src/modelos/AeronaveCarga.js";
import { AeronavePassageiros } from "../../src/modelos/AeronavePassageiros.js";

describe('ServicoAeronaves', () => {
    let servicoAeronaves;

    beforeEach(() => {
        servicoAeronaves = new ServicoAeronaves();

        // Cadastro aeronave
        // respManutencao, prefixo, velocidadeCruzeiro, autonomia
        servicoAeronaves.adicionar(new AeronaveParticular("MaxiLog", "PP-XYZ", 200, 1000))
        // pesoMax, nomeCIA, prefixo, velocidadeCruzeiro, autonomia
        servicoAeronaves.adicionar(new AeronaveCarga(25, "Azul", "PC-ABC", 700, 3500))
        // maxPassageiros, nomeCIA, prefixo, velocidadeCruzeiro, autonomia
        servicoAeronaves.adicionar(new AeronavePassageiros(180, "Gol", "PP-DEF", 900, 6000))

    });

    it('deve buscar todas as aeronaves', () => {
        const todasAeronaves = servicoAeronaves.todas();
        expect(todasAeronaves.length).toBe(3);
    });

    it('deve recuperar uma aeronave pelo prefixo', () => {
        const aeronave = servicoAeronaves.recupera("PP-XYZ");
        expect(aeronave instanceof AeronaveParticular).toBe(true);
        expect(aeronave.getPrefixo()).toBe("PP-XYZ");
    });
});