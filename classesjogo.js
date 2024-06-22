// Definindo a classe Heroi
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
// Criando método atacar
    atacar(){
        let ataque;

        switch(this.tipo) {
            case 'Mago':
                ataque = 'Magia';
                break;
            case 'Guerreiro':
                ataque = 'Espada';
                break;
            case 'Monge':
                ataque = 'Artes Marciais';
                break;
            case 'Ninja':
                ataque = 'Shuriken';
                break;
            default:
                ataque = 'Atacou';            
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
let heroi1 = new heroi("Master Chief", 30, "Guerreiro");
let heroi2 = new heroi("Geralt", 50, "Mago");
let heroi3 = new heroi("Kharazim", 45, "Monge");
let heroi4 = new heroi("Ryu Hayabusa", 25, "Ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
