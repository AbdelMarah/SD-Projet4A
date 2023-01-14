#FROM nginx
#COPY . /usr/share/nginx/html

#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/AppWeb4A-FrontEnd /usr/share/nginx/html
