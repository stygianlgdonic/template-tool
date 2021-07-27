FROM node:14-alpine

WORKDIR /app
COPY ./package.json ./package.json
# RUN yarn install
RUN npm install
COPY . .
RUN npm build --prod

CMD [ "npm", "run", "start" ]
