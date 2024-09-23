import { ServicoPilotos } from "../../src/servicos/ServicoPilotos.js";
import { Piloto } from "../../src/modelos/Piloto.js";

describe('ServicoPiloto', () => {
    let servicoPilotos;

    beforeEach(() => {
        servicoPilotos = new ServicoPilotos();
        // Cadastro pilotos
        servicoPilotos.adicionar(new Piloto("Gabriela de Castro", "12345", true))
        servicoPilotos.adicionar(new Piloto("Isabela Laurindo", "67890", true))
        servicoPilotos.adicionar(new Piloto("Eduardo Figueiredo", "35795", true))
    });

    it('deve buscar todos os pilotos', () => {
        const todosPilotos = servicoPilotos.todos();
        expect(todosPilotos.length).toBe(3);
        expect(todosPilotos[0].getNome()).toBe("Gabriela de Castro");
        expect(todosPilotos[1].getNome()).toBe("Isabela Laurindo");
        expect(todosPilotos[2].getNome()).toBe("Eduardo Figueiredo");
    });

    it('deve buscar piloto de matricula 12345', () => {
        const pilotoEncontrado = servicoPilotos.recupera("12345");
        expect(pilotoEncontrado.getNome()).toBe("Gabriela de Castro");
    });
});