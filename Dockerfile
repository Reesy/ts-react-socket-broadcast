FROM node:16.8.0

EXPOSE 7070

COPY . ./

CMD ["node", "./dist/server.js"]