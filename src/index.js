import { Piloto } from "./modelos/Piloto.js"
import { AeronaveCarga } from "./modelos/AeronaveCarga.js"
import { AeronavePassageiros } from "./modelos/AeronavePassageiros.js"
import { AeronaveParticular } from "./modelos/AeronaveParticular.js"
import { Aerovia } from "./modelos/Aerovia.js"
import { ServicoAerovias } from "./servicos/ServicoAerovias.js"
import { ServicoPilotos } from "./servicos/ServicoPilotos.js"
import { ServicoAeronaves } from "./servicos/ServicoAeronaves.js"

const servicoAeronaves = new ServicoAeronaves();
const servicoPilotos = new ServicoPilotos();
const servicoAerovias = new ServicoAerovias();
// Cadastro pilotos
servicoPilotos.adicionar(new Piloto("Gabriela de Castro", "12345", true))
servicoPilotos.adicionar(new Piloto("Isabela Laurindo", "67890", true))
servicoPilotos.adicionar(new Piloto("Eduardo Figueiredo", "35795", true))

// Cadastro aeronave
// respManutencao, prefixo, velocidadeCruzeiro, autonomia
servicoAeronaves.adicionar(new AeronaveParticular("MaxiLog", "PP-XYZ", 200, 1000))
// pesoMax, nomeCIA, prefixo, velocidadeCruzeiro, autonomia
servicoAeronaves.adicionar(new AeronaveCarga(25, "Azul", "PC-ABC", 700, 3500))
// maxPassageiros, nomeCIA, prefixo, velocidadeCruzeiro, autonomia
servicoAeronaves.adicionar(new AeronavePassageiros(180, "Gol", "PP-DEF", 900, 6000))

// Cadastro aerovias
servicoAerovias.adicionar(new Aerovia("POA-FLO", "Porto Alegre(POA)", "Florianópolis(FLO)", 500))
servicoAerovias.adicionar(new Aerovia("FLO-CWB", "Florianópolis(FLO)", "Curitiba(CWB)", 300))
servicoAerovias.adicionar(new Aerovia("CWB-GRU", "Curitiba(CWB)", "São Paulo (GRU)", 400))
servicoAerovias.adicionar(new Aerovia("GRU-POA", "São Paulo (GRU)", "Porto Alegre(POA)", 1000))

//Testes Pilotos
// Buscando todos pilotos
console.log("Buscando todos pilotos...");
const todosPilotos = servicoPilotos.todos();
// Iterando todos pilotos para printar no terminal o toString de cada um
todosPilotos.forEach(piloto => console.log(piloto.toString()));
console.log("----------------------------------------------------------");

// Buscando piloto de matricula "12345"
console.log("Buscando piloto de  matricula 12345...");
const piloto1 = servicoPilotos.recupera("12345");
console.log(piloto1.toString())
console.log("----------------------------------------------------------");

// Testes Aeronaves
// Buscando todas aeronaves
console.log("Buscando todas as aeronaves...");
const todasAeronaves = servicoAeronaves.todas();
// Iterando todas aeronaves para printar no terminal o toString de cada uma
todasAeronaves.forEach(aeronave => console.log(aeronave.toString()));
console.log("----------------------------------------------------------");

// Testes Aerovias
// Buscando todas aerovias
console.log("Buscando todas as aerovias...");
const aerovias = servicoAerovias.todas();
// Iterando todas aeronaves para printar no terminal o toString de cada uma
aerovias.forEach(aerovia => console.log(aerovia.toString()));
console.log("----------------------------------------------------------");

// Buscando aerovia Porto Alegre - Florianópolis
console.log("Buscando aerovia POA-FLO");
const aerovia1 = servicoAerovias.recupera("Porto Alegre(POA)", "Florianópolis(FLO)");
console.log(aerovia1.toString());
console.log("----------------------------------------------------------");
