FROM node:16

WORKDIR /kaye_api
COPY . /kaye_api

RUN npm install

CMD ["npm", "run", "dev"]
