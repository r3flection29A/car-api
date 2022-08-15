FROM node

RUN mkdir -p /home/app

COPY package*.json ./

RUN npm

COPY . /home/app

EXPOSE 3000

CMD ["npm","run","dev"]
