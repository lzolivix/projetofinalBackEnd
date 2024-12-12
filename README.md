# Sistema de Cadastro de Explorações Espaciais

## Objetivo

Este projeto tem como objetivo criar um backend em TypeScript, estruturado no padrão Model-View-Controller (MVC), para gerenciar um sistema de cadastro de explorações espaciais. O sistema permite registrar novas missões, listar todas as missões cadastradas, excluir missões específicas e implementar um sistema de autenticação baseado em tokens Bearer.

## Funcionalidades

- **Registrar novas missões.**
- **Listar todas as missões cadastradas.**
- **Excluir uma missão específica pelo seu identificador único.**
- **Sistema de autenticação baseado em tokens JWT para proteger rotas sensíveis.**

## Regras e Restrições

- **Entrega via GitHub:**
  - Crie um repositório público no GitHub.
  - Cada módulo do projeto (model, repository, controller, rotas, autenticação, etc.) deve ser registrado como um commit distinto no histórico do repositório.
  - O histórico de commits será avaliado para verificar a progressão do desenvolvimento.

## Estrutura do Projeto

O projeto segue o padrão Model-View-Controller (MVC) com a seguinte estrutura:


## Banco de Dados

Utilize um banco de dados PostgreSQL hospedado em [Railway.app](https://railway.app/) ou [Render.com](https://render.com/). Crie tabelas para armazenar dados de missões e usuários para autenticação.

## Passos para Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seuusuario/meu-projeto-mvc.git
   cd meu-projeto-mvc
   
 -instale as dependencias: npm install
 
 -Configuração do Banco de Dados:
  Configure suas credenciais do banco de dados no arquivo .env (crie este arquivo se não existir).

  -Compile o projeto (se necessário):
   npm run build

   -Inicie o servidor:
    npm start

  ## Instruções de Uso das Rotas
    
-Rotas de Missões

-GET /missoes: Retorna todas as missões cadastradas (acesso público).

-Exemplo de requisição:text

-GET /missoes HTTP/1.1

-Host: localhost:3000

-POST /missoes: Permite adicionar uma nova missão ao sistema (rota protegida por autenticação).

-Exemplo de requisição:text

-POST /missoes HTTP/1.1

-Authorization: Bearer <token>

-Content-Type: application/json

{
  "nome": "Voyager 1",
  "planetaAlvo": "Marte",
  "duracaoEmAnos": 2.5,
  "quantidadeDeTripulantes": 5,
  "tecnologiasUtilizadas": ["Propulsão iônica", "IA"]
}

-DELETE /missoes/:id: Permite excluir uma missão específica pelo seu identificador único (rota protegida por autenticação).

-Exemplo de requisição:text

-DELETE /missoes/1 HTTP/1.1

-Authorization: Bearer <token>


## Rotas de Autenticação

# POST /usuarios/registro: Registra novos usuários com nome, e-mail e senha.

-Exemplo de requisição:text

-POST /usuarios/registro HTTP/1.1
Content-Type: application/json

{
  "nome": "João",
  "email": "joao@example.com",
  "senha": "senhaSegura"
}
POST /usuarios/login: Permite login de usuários e retorna um token JWT.
Exemplo de requisição:
text
POST /usuarios/login HTTP/1.1
Content-Type: application/json


## Validação de Dados
-Todas as entradas devem ser validadas para garantir que estão completas e corretas. Mensagens de erro claras e informativas serão retornadas em caso de falhas.


## Tecnologias Utilizadas

-TypeScript

-Express.js

-PostgreSQL

-JWT (JSON Web Tokens)



