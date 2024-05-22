FROM node:latest
WORKDIR /usr/src/app
COPY package.json ./
COPY . .
RUN npm install
ARG PORT=3000
EXPOSE ${PORT}

CMD ["npm", "run", "start:docker"]  


