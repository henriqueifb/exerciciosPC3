# Exercício de Fixação 09 – Questões Teóricas

**Tema:** Explorando a API ViaCEP e Evoluindo a Classe `Endereco`

## 1. Qual a vantagem de consultar diretamente a API antes de modificar a classe?

Consultar a API permite conhecer a estrutura do JSON retornado, identificar as propriedades disponíveis e decidir quais dados são úteis para a aplicação. Assim, evitamos criar atributos desnecessários e sabemos exatamente quais valores serão tratados.

## 2. Por que os novos dados devem ser armazenados em atributos privados?

Para preservar o encapsulamento, impedindo que outras partes do programa alterem diretamente os dados internos do objeto. Desse modo, a classe mantém o controle sobre suas informações por meio de seus métodos.

## 3. Qual a finalidade dos métodos `get` adicionados à classe?

Permitir a consulta dos valores armazenados nos atributos privados sem expô-los diretamente. Os getters oferecem acesso controlado às informações do endereço.

## 4. Por que não devemos acessar diretamente os atributos retornados pela API fora de `setCep()`?

Porque centralizar a consulta, a validação e o armazenamento dos dados em `setCep()` facilita a manutenção e evita a repetição de lógica. As outras partes do programa devem obter os dados pelos getters da classe, sem depender diretamente da estrutura da resposta da API.

## 5. Qual a diferença entre o nome de uma propriedade da API e o nome de um atributo da classe?

A propriedade da API é o nome de um campo presente no JSON retornado pelo ViaCEP. Já o atributo da classe é o campo interno usado para armazenar essa informação. Por exemplo, a API retorna `localidade`, mas a classe pode armazená-la no atributo privado `#cidade`.

## 6. Por que a classe não precisa utilizar obrigatoriamente os mesmos nomes adotados pelo ViaCEP?

Porque a classe possui sua própria estrutura e pode organizar os dados conforme as necessidades do sistema. É possível mapear propriedades externas para atributos com nomes mais adequados, mantendo a aplicação menos dependente da nomenclatura da API.

## 7. O que aconteceria se a API adicionasse novos campos no futuro?

Em geral, a aplicação continuaria funcionando, desde que as propriedades já utilizadas permanecessem compatíveis. Os novos campos poderiam ser ignorados ou incorporados posteriormente por meio de novos atributos privados, atribuições em `setCep()` e getters.

## 8. Por que o tratamento com `try/catch` deve continuar funcionando mesmo após a inclusão de novos atributos?

Porque a consulta ainda pode apresentar problemas, como falhas de conexão, respostas inesperadas ou CEPs inexistentes. O `try/catch` permite tratar esses erros e impedir que a aplicação tente exibir dados de uma consulta que não foi concluída com sucesso.
