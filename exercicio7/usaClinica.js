import { Cliente } from './objetos/Cliente.js';
import { Animal } from './objetos/Animal.js';
import { Prontuario } from './objetos/Prontuario.js';
import { Veterinario } from './objetos/Veterinario.js';

// ==========================
// CLIENTE
// ==========================

const cliente = new Cliente(
    'João Silva',
    '(61) 99999-9999'
);

// ==========================
// ANIMAIS
// ==========================

const rex = new Animal(
    'Rex',
    'Cachorro'
);

const luna = new Animal(
    'Luna',
    'Gato'
);

// Relacionamento Cliente -> Animais

cliente.addAnimal(rex);
cliente.addAnimal(luna);

// ==========================
// PRONTUÁRIOS
// ==========================

const prontuarioRex = new Prontuario(
    1,
    'Vacinas em dia.'
);

const prontuarioLuna = new Prontuario(
    2,
    'Animal saudável.'
);

// Relacionamento Animal -> Prontuario

rex.setProntuario(prontuarioRex);
luna.setProntuario(prontuarioLuna);

// ==========================
// VETERINÁRIOS
// ==========================

const veterinario1 = new Veterinario(
    'Dra. Ana',
    'CRMV-1234'
);

const veterinario2 = new Veterinario(
    'Dr. Carlos',
    'CRMV-5678'
);

// Veterinário 1 atende Rex e Luna

veterinario1.addAnimal(rex);
veterinario1.addAnimal(luna);

// Veterinário 2 também atende Rex

veterinario2.addAnimal(rex);

// ==========================
// EXIBIÇÃO
// ==========================

console.log('===== CLIENTE =====');

console.log(`Nome: ${cliente.getNome()}`);
console.log(`Telefone: ${cliente.getTelefone()}`);

console.log('\n===== ANIMAIS =====');

cliente.listarAnimais();

console.log('\n===== REX =====');

console.log(rex.getInformacoes());

console.log(
    `Prontuário: ${rex.getProntuario().getNumero()}`
);

console.log(
    `Observações: ${rex.getProntuario().getObservacoes()}`
);

rex.listarVeterinarios();

console.log('\n===== LUNA =====');

console.log(luna.getInformacoes());

console.log(
    `Prontuário: ${luna.getProntuario().getNumero()}`
);

console.log(
    `Observações: ${luna.getProntuario().getObservacoes()}`
);

luna.listarVeterinarios();

// ==========================
// REFERÊNCIAS CRUZADAS
// ==========================

console.log('\n===== REFERÊNCIAS CRUZADAS =====');

console.log(
    'Cliente do Rex:',
    rex.getCliente().getNome()
);

console.log(
    'Animal do prontuário do Rex:',
    prontuarioRex.getAnimal().getNome()
);

console.log(
    'Animais atendidos pela Dra. Ana:',
    veterinario1
        .getAnimais()
        .map(animal => animal.getNome())
);

console.log(
    'Veterinários do Rex:',
    rex
        .getVeterinarios()
        .map(veterinario => veterinario.getNome())
);