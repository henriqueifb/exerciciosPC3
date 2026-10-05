import PJ from '../pessoas/PJ.mjs';


// ======================================
// 1. CLASSE
// ======================================

class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor() {
        this.#numero = '';
        this.#estado = '';
        this.#dataRegistro = null;
        this.#pj = null;
    }

    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        }

        return false;
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        if (typeof estado === 'string' && estado.trim() !== '') {
            this.#estado = estado;
            return true;
        }

        return false;
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(data) {
        if (data instanceof Date) {
            this.#dataRegistro = data;
            return true;
        }

        return false;
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }

        return false;
    }

    getPJ() {
        return this.#pj;
    }
}


// ======================================
// 2. FUNÇÃO FÁBRICA
// ======================================

function IEfunc() {
    let numero = '';
    let estado = '';
    let dataRegistro = null;
    let pj = null;

    return {
        setNumero(valor) {
            if (valor) {
                numero = valor;
                return true;
            }

            return false;
        },

        getNumero() {
            return numero;
        },

        setEstado(valor) {
            if (
                typeof valor === 'string' &&
                valor.trim() !== ''
            ) {
                estado = valor;
                return true;
            }

            return false;
        },

        getEstado() {
            return estado;
        },

        setDataRegistro(data) {
            if (data instanceof Date) {
                dataRegistro = data;
                return true;
            }

            return false;
        },

        getDataRegistro() {
            return dataRegistro;
        },

        setPJ(valor) {
            if (valor instanceof PJ) {
                pj = valor;
                return true;
            }

            return false;
        },

        getPJ() {
            return pj;
        }
    };
}


// ======================================
// 3. OBJETO LITERAL
// ======================================

const IEjson = {
    numero: '',
    estado: '',
    dataRegistro: null,
    pj: null,

    setNumero(valor) {
        if (valor) {
            this.numero = valor;
            return true;
        }

        return false;
    },

    getNumero() {
        return this.numero;
    },

    setEstado(valor) {
        if (
            typeof valor === 'string' &&
            valor.trim() !== ''
        ) {
            this.estado = valor;
            return true;
        }

        return false;
    },

    getEstado() {
        return this.estado;
    },

    setDataRegistro(data) {
        if (data instanceof Date) {
            this.dataRegistro = data;
            return true;
        }

        return false;
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(valor) {
        if (valor instanceof PJ) {
            this.pj = valor;
            return true;
        }

        return false;
    },

    getPJ() {
        return this.pj;
    }
};


export default IEclss;

export {
    IEfunc,
    IEjson
};
