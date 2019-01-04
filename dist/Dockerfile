FROM node
WORKDIR /app
COPY ["ormconfig.json", "package.json", "package-lock.json", "./"]
RUN npm i
COPY ["server", "web", "./"]
CMD [ "npm", "start" ]
