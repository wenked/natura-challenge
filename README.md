# natura-challenge

## Tecnologias Utilizadas

- **Frontend**: React, Vite, TypeScript
- **Backend**: Node.js, Express, Sequelize
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker, Docker Compose

## Configuração do Ambiente

### Pré-requisitos

- Node.js
- Docker
- Docker Compose

### Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/wenked/natura-challenge.git
   cd natura-challenge
   ```

2. Configure as variáveis de ambiente:

   - Copie o arquivo `.env.example` para [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FApplications%2Fwork%2Fnatura-challenge%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '/Applications/work/natura-challenge/.env') no diretório [`backend`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FApplications%2Fwork%2Fnatura-challenge%2Fbackend%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D '/Applications/work/natura-challenge/backend') e preencha as variáveis necessárias.

3. Instale as dependências do backend:

   ```sh
   cd backend
   npm install
   ```

4. Instale as dependências do frontend:

   ```sh
   cd ../frontend
   npm install
   ```

### Executando a Aplicação

1.Copie o .env.example para .env no diretório root e preencha as variáveis necessárias.

2. Inicie os containers Docker:

   ```sh
   docker-compose up
   ```

3. Acesse a aplicação:

   - Frontend: `http://localhost:5177`
   - Backend: `http://localhost:5001`

## Scripts Disponíveis

### Backend

- `npm run start`: Inicia o servidor backend buildado.
- `npm run dev`: Inicia o servidor backend em modo de desenvolvimento.
- [`npm run build`](command:_github.copilot.openSymbolFromReferences?%5B%22npm%20run%20build%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FApplications%2Fwork%2Fnatura-challenge%2F.gitignore%22%2C%22external%22%3A%22file%3A%2F%2F%2FApplications%2Fwork%2Fnatura-challenge%2F.gitignore%22%2C%22path%22%3A%22%2FApplications%2Fwork%2Fnatura-challenge%2F.gitignore%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A60%2C%22character%22%3A8%7D%7D%5D%5D 'Go to definition'): Compila o código TypeScript.
- `npm run lint`: Executa o ESLint para verificar o código.

Rotas disponíveis:

- `GET /api/products`: Retorna a lista de produtos. Aceita os parametros .
- `GET /api/categories`: Retorna a lista de categorias.

### Frontend

- `npm run preview`: Inicia o servidor de desenvolvimento do frontend em modo preview.
- `npm run dev`: Inicia o servidor de desenvolvimento do frontend.
- [`npm run build`](command:_github.copilot.openSymbolFromReferences?%5B%22npm%20run%20build%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FApplications%2Fwork%2Fnatura-challenge%2F.gitignore%22%2C%22external%22%3A%22file%3A%2F%2F%2FApplications%2Fwork%2Fnatura-challenge%2F.gitignore%22%2C%22path%22%3A%22%2FApplications%2Fwork%2Fnatura-challenge%2F.gitignore%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A60%2C%22character%22%3A8%7D%7D%5D%5D 'Go to definition'): Compila o código para produção.
- `npm run lint`: Executa o ESLint para verificar o código.
- `npm run test`: Executa os testes.
- `npm run run:migration`: Executa as migrations do banco de dados. (Após buildar o backend)
- `npm run run:seed`: Executa os seeds do banco de dados. (Após buildar o backend)

# Desafio

Link para o desafio hospedado no railway o frontend,backend e o banco de dados: [Frontend](https://frontend-production-6d6c.up.railway.app/)

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
