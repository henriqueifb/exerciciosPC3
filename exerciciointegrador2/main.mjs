import PJ from './pessoas/PJ.mjs';

import IEclss, {
    IEfunc,
    IEjson
} from './objetos/IE.mjs';


// ======================================
// PESSOAS JURÍDICAS
// ======================================

const empresa1 = new PJ();

empresa1.setNome('Tech Brasil');
empresa1.setEmail('contato@techbrasil.com');
empresa1.setCNPJ('12345678000199');
empresa1.setRazaoSocial(
    'Tech Brasil Tecnologia LTDA'
);


const empresa2 = new PJ();

empresa2.setNome('Digital Solutions');
empresa2.setEmail('contato@digitalsolutions.com');
empresa2.setCNPJ('98765432000155');
empresa2.setRazaoSocial(
    'Digital Solutions Serviços LTDA'
);


// ======================================
// DATE
// ======================================

const dataRegistro = new Date();


// ======================================
// OBJETO INVÁLIDO
// ======================================

const objetoInvalido = {
    nome: 'Empresa Inválida'
};


// ======================================
// IE USANDO CLASSE
// ======================================

const ieClasse = new IEclss();

ieClasse.setNumero('07300001');
ieClasse.setEstado('DF');
ieClasse.setDataRegistro(dataRegistro);

console.log(
    'IEclss objeto inválido:',
    ieClasse.setPJ(objetoInvalido)
);

console.log(
    'IEclss PJ válida:',
    ieClasse.setPJ(empresa1)
);


// ======================================
// IE USANDO FUNÇÃO FÁBRICA
// ======================================

const ieFuncao = IEfunc();

ieFuncao.setNumero('07300002');
ieFuncao.setEstado('GO');
ieFuncao.setDataRegistro(dataRegistro);

console.log(
    'IEfunc objeto inválido:',
    ieFuncao.setPJ(objetoInvalido)
);

console.log(
    'IEfunc PJ válida:',
    ieFuncao.setPJ(empresa2)
);


// ======================================
// IE USANDO OBJETO LITERAL
// ======================================

IEjson.setNumero('07300003');
IEjson.setEstado('DF');
IEjson.setDataRegistro(dataRegistro);

console.log(
    'IEjson objeto inválido:',
    IEjson.setPJ(objetoInvalido)
);

console.log(
    'IEjson PJ válida:',
    IEjson.setPJ(empresa1)
);


// ======================================
// RELATÓRIO DAS PESSOAS JURÍDICAS
// ======================================

console.log('\n=== Pessoa Jurídica 1 ===');

console.log(
    `Nome: ${empresa1.getNome()}`
);

console.log(
    `E-mail: ${empresa1.getEmail()}`
);

console.log(
    `CNPJ: ${empresa1.getCNPJ()}`
);

console.log(
    `Razão Social: ${empresa1.getRazaoSocial()}`
);


console.log('\n=== Pessoa Jurídica 2 ===');

console.log(
    `Nome: ${empresa2.getNome()}`
);

console.log(
    `E-mail: ${empresa2.getEmail()}`
);

console.log(
    `CNPJ: ${empresa2.getCNPJ()}`
);

console.log(
    `Razão Social: ${empresa2.getRazaoSocial()}`
);


// ======================================
// FUNÇÃO GENÉRICA
// ======================================

function mostrarIE(ie) {

    console.log('\n=== Inscrição Estadual ===');

    console.log(
        `Número: ${ie.getNumero()}`
    );

    console.log(
        `Estado: ${ie.getEstado()}`
    );

    console.log(
        `Data de Registro: ${
            ie.getDataRegistro().toLocaleString('pt-BR')
        }`
    );

    console.log(
        `Pessoa Jurídica: ${
            ie.getPJ().getRazaoSocial()
        }`
    );
}


// ======================================
// TESTANDO A MESMA FUNÇÃO
// ======================================

console.log('\n--- IEclss ---');
mostrarIE(ieClasse);

console.log('\n--- IEfunc ---');
mostrarIE(ieFuncao);

console.log('\n--- IEjson ---');
mostrarIE(IEjson);


// ======================================
// TESTANDO getPJ()
// ======================================

console.log(
    '\nEmpresa relacionada à IEclss:',
    ieClasse.getPJ().getRazaoSocial()
);

console.log(
    'Empresa relacionada à IEfunc:',
    ieFuncao.getPJ().getRazaoSocial()
);

console.log(
    'Empresa relacionada ao IEjson:',
    IEjson.getPJ().getRazaoSocial()
);
