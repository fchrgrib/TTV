FROM node:20-alpine

WORKDIR /app/backend

COPY package*.json ./
COPY tsconfig.json ./tsconfig.json

RUN npm install

COPY . .

CMD ["npm", "start"]