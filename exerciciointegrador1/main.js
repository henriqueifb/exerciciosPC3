const Pessoa = require('./pessoas/Pessoa');
const Aluno = require('./pessoas/Aluno');
const Professor = require('./pessoas/Professor');

function mostrarDados(objeto) {
    console.log('---------------------------');

    console.log(`Nome: ${objeto.getNome()}`);
    console.log(`Email: ${objeto.getEmail() || 'E-mail inválido'}`);

    if (objeto instanceof Aluno) {
        console.log(
            `Matrícula: ${objeto.getMatricula() || 'Matrícula inválida'}`
        );
    }

    if (objeto instanceof Professor) {
        console.log(`Disciplina: ${objeto.getDisciplina()}`);
    }
}


// ===========================
// PESSOAS
// ===========================

const pessoa1 = new Pessoa(
    'João Silva',
    'joao@gmail.com'
);

const pessoa2 = new Pessoa(
    'Maria Souza',
    'mariaemailerrado'
);


// ===========================
// ALUNOS
// ===========================

const aluno1 = new Aluno(
    'Carlos Lima',
    'carlos@gmail.com',
    '123456'
);

const aluno2 = new Aluno(
    'Ana Paula',
    'ana@gmail.com',
    'ABC123'
);


// ===========================
// PROFESSORES
// ===========================

const professor1 = new Professor(
    'Daniel Santos',
    'daniel@ifb.edu.br',
    'Programação'
);

const professor2 = new Professor(
    'Fernanda Costa',
    'fernanda@gmail.com',
    'Banco de Dados'
);


// ===========================
// RELATÓRIO
// ===========================

console.log('\n===== RELATÓRIO FINAL =====');

mostrarDados(pessoa1);
mostrarDados(pessoa2);

mostrarDados(aluno1);
mostrarDados(aluno2);

mostrarDados(professor1);
mostrarDados(professor2);

console.log('---------------------------');
