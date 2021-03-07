clean:
   docker system prune -a -f

build:
	docker build -t symfony .

rebuild: clean build

run:
   docker run --rm -p 81:80 symfony

rerun: rebuild run

compose:
   docker-compose up --build -d