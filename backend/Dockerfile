FROM node:latest

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install
RUN npm -g install mysql2
RUN npm -g install nodemon

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 8000

CMD ["npm", "run", "dev"]