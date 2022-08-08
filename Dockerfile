FROM node

RUN mkdir -p /home/app

COPY package*.json .

RUN yarn

COPY . /home/app

EXPOSE 3000

CMD ["yarn", "dev"]
