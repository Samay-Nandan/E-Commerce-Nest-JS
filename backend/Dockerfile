FROM node:18-alpine

WORKDIR /backend

COPY package.json ./

RUN yarn

COPY . .

RUN yarn build

RUN npm install -g pm2

EXPOSE 5000

CMD ["pm2-runtime", "start", "npm", "--name", "Backend", "--", "run", "start:prod"]
