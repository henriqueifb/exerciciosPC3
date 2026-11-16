import Endereco from './Endereco.mjs';

async function testarCep(cep) {
    console.log(`\n=== CONSULTA DO CEP ${cep} ===`);

    const endereco = new Endereco();
    const sucesso = await endereco.setCep(cep);

    if (!sucesso) {
        console.log('Consulta não realizada. Nenhum dado do endereço será exibido.');
        return;
    }

    console.log(`CEP: ${endereco.getCep()}`);
    console.log(`Logradouro: ${endereco.getLogradouro()}`);
    console.log(`Bairro: ${endereco.getBairro()}`);
    console.log(`Cidade: ${endereco.getCidade()}`);
    console.log(`UF: ${endereco.getUf()}`);
    console.log(`Complemento: ${endereco.getComplemento() || 'não informado'}`);
    console.log(`Região: ${endereco.getRegiao()}`);
    console.log(`Código IBGE: ${endereco.getIbge()}`);
    console.log(`DDD: ${endereco.getDdd()}`);
    console.log(`Endereço completo: ${endereco.mostrarEnderecoCompleto()}`);
}

async function main() {
    await testarCep('72015565');  // Válido
    await testarCep('99999999');  // Formato válido, mas inexistente
    await testarCep('123');       // Formato inválido
}

main();
