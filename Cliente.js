import { Animal } from './Animal.js';

class Cliente {
    #nome;
    #telefone;
    #animais;

    constructor(nome, telefone) {
        this.#nome = nome;
        this.#telefone = telefone;
        this.#animais = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getTelefone() {
        return this.#telefone;
    }

    setTelefone(telefone) {
        this.#telefone = telefone;
    }

    getAnimais() {
        return this.#animais;
    }

    addAnimal(animal) {
        if (!(animal instanceof Animal)) {
            throw new TypeError('O objeto deve ser da classe Animal.');
        }

        if (!this.#animais.includes(animal)) {
            this.#animais.push(animal);
        }

        // Referência cruzada
        if (animal.getCliente() !== this) {
            animal.setCliente(this);
        }
    }

    listarAnimais() {
        console.log(`Cliente: ${this.#nome}`);
        console.log('Animais:');

        this.#animais.forEach(animal => {
            console.log(`• ${animal.getNome()}`);
        });
    }
}

export { Cliente };