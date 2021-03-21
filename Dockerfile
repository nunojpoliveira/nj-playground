FROM nginx:1.19.8-alpine
COPY .docker/nginx.conf /etc/nginx/nginx.conf
COPY /dist/nj-playground /usr/share/nginx/html
