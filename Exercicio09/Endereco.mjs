export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #cidade;
    #uf;
    #complemento;
    #regiao;
    #ibge;
    #ddd;

    constructor() {
        this.#cep = '';
        this.#logradouro = '';
        this.#bairro = '';
        this.#cidade = '';
        this.#uf = '';
        this.#complemento = '';
        this.#regiao = '';
        this.#ibge = '';
        this.#ddd = '';
    }

    async setCep(cep) {
        try {
            const cepInformado = String(cep).trim();

            if (!/^\d{5}-?\d{3}$/.test(cepInformado)) {
                throw new Error('O CEP deve conter 8 dígitos.');
            }

            const cepLimpo = cepInformado.replace('-', '');
            const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

            if (!resposta.ok) {
                throw new Error('Falha na consulta à API ViaCEP.');
            }

            const dados = await resposta.json();

            if (dados.erro || !dados.cep) {
                throw new Error('CEP não encontrado.');
            }

            this.#cep = dados.cep;
            this.#logradouro = dados.logradouro ?? '';
            this.#bairro = dados.bairro ?? '';
            this.#cidade = dados.localidade ?? '';
            this.#uf = dados.uf ?? '';
            this.#complemento = dados.complemento ?? '';
            this.#regiao = dados.regiao ?? '';
            this.#ibge = dados.ibge ?? '';
            this.#ddd = dados.ddd ?? '';

            return true;
        } catch (erro) {
            console.error(`Erro ao consultar CEP: ${erro.message}`);
            return false;
        }
    }

    getCep() { return this.#cep; }
    getLogradouro() { return this.#logradouro; }
    getBairro() { return this.#bairro; }
    getCidade() { return this.#cidade; }
    getUf() { return this.#uf; }
    getComplemento() { return this.#complemento; }
    getRegiao() { return this.#regiao; }
    getIbge() { return this.#ibge; }
    getDdd() { return this.#ddd; }

    mostrarEnderecoCompleto() {
        if (!this.#cep) {
            return 'Endereço ainda não consultado.';
        }

        const partes = [
            this.#logradouro,
            this.#complemento,
            this.#bairro,
            `${this.#cidade}/${this.#uf}`,
            `CEP: ${this.#cep}`
        ];

        return partes.filter(Boolean).join(' - ');
    }
}
