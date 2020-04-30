FROM node:alpine

WORKDIR  /apps
COPY . .

RUN yarn install
RUN yarn global add serve

EXPOSE 3000
CMD ["serve","-s","build","-l","3000"]