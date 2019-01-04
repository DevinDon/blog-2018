FROM node
WORKDIR /app
COPY ["ormconfig.json", "package.json", "package-lock.json", "/app/"]
RUN npm i
COPY ["server", "/app/server"]
RUN pwd && ls
COPY ["web", "/app/web"]
CMD [ "npm", "start" ]
