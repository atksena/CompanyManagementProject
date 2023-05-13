FROM node:16.11

RUN mkdir /code
WORKDIR /code
COPY . /code

RUN npm install axios

RUN npm install

CMD ["npm", "start"]