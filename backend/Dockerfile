FROM node:20.16.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN chmod +x /app/start.sh

CMD ["sh", "/app/start.sh"]