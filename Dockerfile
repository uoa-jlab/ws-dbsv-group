FROM nginx:latest

WORKDIR /etc/nginx

COPY ./nginx.conf .

EXPOSE 8910

CMD ["nginx", "-g", "daemon off;"]