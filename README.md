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

## Funcionalidades

### Visualização dos alunos cadastrados

Todos os alunos cadastrados são exibidos em uma lista na página inicial do aplicativo em ordem alfabética.

### Criar um novo aluno

O formulário de criação de um novo aluno pode ser acessado por um FAB(Floating Action Button) na página inicial.
A criação do aluno só é realizada se todos os campos do formulário forem válidos.

### Editar aluno

A página de edição de aluno pode ser acessada tanto pela página inicial (deslizando para a esquerda o item que você deseja editar) quanto pela página de visualização do aluno (FAB).
A página de edição é a mesma de criação com o formulário já preenchido com as informações do aluno.
A edição do aluno só é realizada se todos os campos do formulário forem válidos.

### Deletar aluno

Assim como a edição a deleção de um aluno pode ser feita tanto na página inicial como na página de visualização do aluno.

## Instruções de uso

- Para executar o aplicativo localmente e acessa-lo via browser:

1.  clone o repositório `git clone https://github.com/OtavioHo/codeloop-challenge`
2.  acesse a pasta do repositório `cd codeloop-challenge`
3.  `ionic serve`

- Para rodar no android

1. clone o repositório `git clone https://github.com/OtavioHo/codeloop-challenge`
2. acesse a pasta do repositório `cd codeloop-challenge`
3. `ionic cordova run android --device`.
