import { Animal } from './Animal.js';

class Veterinario {
    #nome;
    #crmv;
    #animais;

    constructor(nome, crmv) {
        this.#nome = nome;
        this.#crmv = crmv;
        this.#animais = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getCrmv() {
        return this.#crmv;
    }

    setCrmv(crmv) {
        this.#crmv = crmv;
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
        if (!animal.getVeterinarios().includes(this)) {
            animal.addVeterinario(this);
        }
    }
}

export { Veterinario };