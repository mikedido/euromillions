FROM php:7.3-alpine

COPY app app

CMD php -S 0.0.0.0:80 app/app/public/index.php