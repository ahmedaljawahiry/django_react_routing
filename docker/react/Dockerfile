FROM node:12

RUN mkdir app/
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /code/
CMD ["yarn", "start"]