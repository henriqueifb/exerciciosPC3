function validarEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }

    return (
        email.includes('@') &&
        (email.endsWith('.com') || email.endsWith('.edu.br'))
    );
}

function validarMatricula(matricula) {
    const texto = String(matricula);

    return /^\d{6}$/.test(texto);
}

function validarCPF(cpf) {
    cpf = String(cpf).replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    // Impede CPFs como 11111111111
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let digito1 = (soma * 10) % 11;

    if (digito1 === 10) {
        digito1 = 0;
    }

    if (digito1 !== Number(cpf[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    let digito2 = (soma * 10) % 11;

    if (digito2 === 10) {
        digito2 = 0;
    }

    return digito2 === Number(cpf[10]);
}

module.exports = {
    validarEmail,
    validarMatricula,
    validarCPF
};
