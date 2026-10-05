const util = require('../biblioteca/util');

class Pessoa {
    #nome;
    #email;

    constructor(nome, email) {
        this.#nome = '';
        this.#email = '';

        this.setNome(nome);
        this.setEmail(email);
    }

    setNome(nome) {
        if (typeof nome === 'string' && nome.trim() !== '') {
            this.#nome = nome;
            return true;
        }

        return false;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (util.validarEmail(email)) {
            this.#email = email;
            return true;
        }

        return false;
    }

    getEmail() {
        return this.#email;
    }
}

module.exports = Pessoa;
