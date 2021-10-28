# Desafio Estágio API application

Esse é o projeto de desafio para estágio

## Banco de dados

No projeto está localizado a pasta `/docker`, nela é possível subir um banco de dados, pré configurado
Basta executar o seguinte comando.

```bash
docker-compose up --build -d
```

Dentro do diretório `/docker` possui uma pasta de `scripts` onde possui um script de carga inicial pra uso da aplicação

## Setup

Execute o seguinte comando para instalar as dependências do projeto.

```bash
npm install
```

Após isso basta executar o comando `npm run dev` ou `npm run start`

### Migrations

Execute o seguinte comando para executar migrações de inicialização.

```bash
npm run migration
```