import Pessoa from './Pessoa.js';

class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    constructor() {
        super();

        this.#cnpj = '';
        this.#razaoSocial = '';
    }

    setCNPJ(cnpj) {
        // CNPJ com exatamente 14 números
        if (
            typeof cnpj === 'string' &&
            /^\d{14}$/.test(cnpj)
        ) {
            this.#cnpj = cnpj;
            return true;
        }

        return false;
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial) {
        if (
            typeof razaoSocial === 'string' &&
            razaoSocial.trim() !== ''
        ) {
            this.#razaoSocial = razaoSocial;
            return true;
        }

        return false;
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }
}

export default PJ;
