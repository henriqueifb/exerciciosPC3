const Pessoa = require('./Pessoa');
const util = require('../biblioteca/util');

class Aluno extends Pessoa {
    #matricula;

    constructor(nome, email, matricula) {
        super(nome, email);

        this.#matricula = '';
        this.setMatricula(matricula);
    }

    setMatricula(matricula) {
        if (util.validarMatricula(matricula)) {
            this.#matricula = String(matricula);
            return true;
        }

        return false;
    }

    getMatricula() {
        return this.#matricula;
    }
}

module.exports = Aluno;
