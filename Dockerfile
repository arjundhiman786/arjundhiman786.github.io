FROM node:alpine

WORKDIR  /apps
COPY . .

RUN yarn install
RUN yarn global add serve
RUN yarn run build

EXPOSE 3000
CMD ["serve","-s","build","-l","3000"]