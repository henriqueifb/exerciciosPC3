class Pessoa {
    #nome;
    #email;

    constructor() {
        this.#nome = '';
        this.#email = '';
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
        if (
            typeof email === 'string' &&
            email.includes('@')
        ) {
            this.#email = email;
            return true;
        }

        return false;
    }

    getEmail() {
        return this.#email;
    }
}

export default Pessoa;
