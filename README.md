# Codeloop Challenge

Teste do processo seletivo da CodeLoop.

## Criação do projeto

O projeto foi desenvolvido utilizando o Ionic 3.

Para criar o projeto base a CLI do Ionic foi utilizada:
`ionic start --type=ionic-angular`

O starte template utilizado foi o blank.

## Criação das Páginas

A página inicial fo utilizada para exibir a lista de alunos, uma página foi criada para exibir um aluno selecionado e ainda um modal foi criado para adicionar e editar alunos.
As páginas estão em seus respectivos diretórios localizados em `src/pages`.

## Estilo

Para estilizar o aplicativo foi utilizado o estilo padrão dos componentes do ionic com uma mudança das cores primária e secundária para as cores da CodeLoop.

## Persistência de Dados

O modulo Storage do Ionic Native foi utilizado para armazenar a lista de alunos da aplicação.
A lista de alunos é um Array de objetos que contem as informações de cada aluno e um ID único para identificação.

## Formulário

O projeto conta com apenas um formulário que funciona tanto para adicionar um novo aluno como para editar.
O formulário foi feito utilizando o módulo FormControl em comjunto com o FormGroup e o FormBuilder do Angular.

### Validações

As validaçõe de cada campo foram feitas utilizando o Validators do angular.
Cada campo tem seu validador de acordo com as especificações:

- Nome (100 caracteres)
- Data de Nascimento (Data válida)
- Série de Ingresso (1o ao 9o ano)
- Endereço:
  - CEP (CEP válido)
  - Rua (120 caracteres)
  - Número (Apenas números)
  - Complemento (50 caracteres)
  - Bairro (100 caracteres)
  - Cidade (Sem especificação)
  - Estado (Sem especificação)
- Dados da mãe:
  - Nome da mãe (100 caracteres)
  - CPF da mãe (CPF válido)
  - Data preferencial para pagamento da mensalidade (Data válida)

#### CEP

Para a validação do CEP foi criado um provider com uma função que valida o CEP fazendo uma requisição HTTP para uma API (https://viacep.com.br/) que verifica se o CEP existe e retorna uma Promise.
Dessa forma foi usado a validação assíncrona do Validators.

#### CPF

Para a validação do CPF foi utilizado o algoritmo disponibilizado pela receita federal (http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js)
