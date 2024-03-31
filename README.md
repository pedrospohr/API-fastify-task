# MyTasks API

Esta é uma API simples para gerenciar tarefas (tasks). Permite a criação, leitura, atualização e exclusão de tarefas.

## Tecnologias Utilizadas

- Node.js
- Fastify
- MySQL

## Pré-requisitos

Antes de executar este projeto, certifique-se de ter instalado:

- Node.js
- MySQL

## Como Rodar o Projeto?
0. Com o MySQL instalado, restaure o banco de dados contido nesse repositório
    ```bash
    API-fastify-task/src/database/mytasks.sql
   

1. ## Clone o repositório:

   ```bash
   git clone https://github.com/EduardoBezerraDev/API-fastify-task.git
   
2. ## Acesse a pasta API-fastify-task e execute no terminal o comando:

   ```bash
   yarn install

3. ## Ainda dentro da pasta, execute no terminal o comando:

   ```bash
   nodemon src/index.js 

4. ## Acesse http://localhost:3001/

   ```bash
   Caso visualize: 
    {
        "message": "Route GET:/ not found",
        "error": "Not Found",
        "statusCode": 404
    }
    está tudo certo!
