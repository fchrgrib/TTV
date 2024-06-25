FROM node:20-alpine

WORKDIR /app/frontend

COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build
EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]