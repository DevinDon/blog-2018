FROM node
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm i
COPY ["ormconfig.json", "./"]
COPY ["server", "./server"]
CMD [ "npm", "start" ]
