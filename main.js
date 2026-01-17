// Classe
function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.acelerar = function() {
        console.log("O veículo está acelerando");
    }
}

// Classes Herdeiras
function Carro(marca, modelo, ano, portas) {
    Veiculo.call(this, marca, modelo, ano);
    this.portas = portas;
    this.tocarRadio = function() {
        console.log("Tocando rádio no carro");
    }
}

function Moto(marca, modelo, ano, tipo) {
    Veiculo.call(this, marca, modelo, ano);
    this.tipo = tipo;
    this.empinar = function() {
        console.log("A moto está empinando");
    }
}


// Instâncias
const carro = new Carro("Toyota", "Corolla", 2020, 4);
const moto = new Moto("Honda", "CB500", 2019, "Esportiva");
const aviao = new Veiculo("Boeing", "747", 2015);

carro.acelerar();
moto.empinar();