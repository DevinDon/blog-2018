FROM node
WORKDIR /app
COPY ["ormconfig.json", "package.json", "package-lock.json", "/app/"]
RUN npm i
COPY ["server", "/app/server"]
COPY ["web", "/app/web"]
CMD [ "npm", "start" ]
