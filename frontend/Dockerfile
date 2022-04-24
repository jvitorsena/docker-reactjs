FROM node:latest

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

EXPOSE 3000

CMD ["npm", "run", "dev"]
# CMD ["npm", "-s", "build"]
# CMD ["npm", "start"]