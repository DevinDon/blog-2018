FROM node
WORKDIR /app
COPY ["package.json", "package-lock.json", "/app/"]
RUN npm i
COPY ["ormconfig.json", "/app/"]
COPY ["server", "/app/server"]
COPY ["web", "/app/web"]
CMD [ "npm", "start" ]
