FROM node
WORKDIR /app
COPY ["ormconfig.json", "package.json", "package-lock.json", "./"]
RUN npm i
COPY ["server", "./"]
RUN pwd && ls
COPY ["web", "./"]
CMD [ "npm", "start" ]
