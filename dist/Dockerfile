FROM node
WORKDIR /app
COPY ["package.json", "./"]
RUN npm i
COPY ["ormconfig.json", "server.config.json", "./"]
COPY ["server", "./server"]
CMD [ "npm", "start" ]
