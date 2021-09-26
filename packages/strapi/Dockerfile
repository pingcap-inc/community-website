FROM strapi/base

WORKDIR /app

COPY ./package.json ./

RUN npm install --only=prod

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
