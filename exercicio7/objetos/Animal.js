import { Cliente } from './Cliente.js';
import { Prontuario } from './Prontuario.js';
import { Veterinario } from './Veterinario.js';

class Animal {
    #nome;
    #especie;
    #cliente;
    #prontuario;
    #veterinarios;

    constructor(nome, especie) {
        this.#nome = nome;
        this.#especie = especie;

        this.#cliente = null;
        this.#prontuario = null;
        this.#veterinarios = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getEspecie() {
        return this.#especie;
    }

    setEspecie(especie) {
        this.#especie = especie;
    }

    getCliente() {
        return this.#cliente;
    }

    setCliente(cliente) {
        if (!(cliente instanceof Cliente)) {
            throw new TypeError('O objeto deve ser da classe Cliente.');
        }

        this.#cliente = cliente;

        // Referência cruzada
        if (!cliente.getAnimais().includes(this)) {
            cliente.addAnimal(this);
        }
    }

    getProntuario() {
        return this.#prontuario;
    }

    setProntuario(prontuario) {
        if (!(prontuario instanceof Prontuario)) {
            throw new TypeError('O objeto deve ser da classe Prontuario.');
        }

        this.#prontuario = prontuario;

        // Referência cruzada
        if (prontuario.getAnimal() !== this) {
            prontuario.setAnimal(this);
        }
    }

    getVeterinarios() {
        return this.#veterinarios;
    }

    addVeterinario(veterinario) {
        if (!(veterinario instanceof Veterinario)) {
            throw new TypeError(
                'O objeto deve ser da classe Veterinario.'
            );
        }

        if (!this.#veterinarios.includes(veterinario)) {
            this.#veterinarios.push(veterinario);
        }

        // Referência cruzada
        if (!veterinario.getAnimais().includes(this)) {
            veterinario.addAnimal(this);
        }
    }

    listarVeterinarios() {
        console.log(`Veterinários de ${this.#nome}:`);

        this.#veterinarios.forEach(veterinario => {
            console.log(
                `• ${veterinario.getNome()} - CRMV: ${veterinario.getCrmv()}`
            );
        });
    }

    getInformacoes() {
        return {
            nome: this.#nome,
            especie: this.#especie,
            cliente: this.#cliente
                ? this.#cliente.getNome()
                : 'Não cadastrado',

            prontuario: this.#prontuario
                ? this.#prontuario.getNumero()
                : 'Não cadastrado',

            veterinarios: this.#veterinarios.map(
                veterinario => veterinario.getNome()
            )
        };
    }
}

export { Animal };