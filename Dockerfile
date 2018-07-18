FROM node:8-alpine
RUN npm install -g gulp

COPY ./ /data
WORKDIR /data

EXPOSE 3500
CMD npm install && npm test