FROM node:20.16.0-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_REACT_APP_API_URL
ARG VITE_PORT

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]