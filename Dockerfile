FROM node:16

WORKDIR /app

RUN apt-get install curl

COPY index.js /app

CMD node index.js

