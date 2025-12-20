docker-compose up --build
docker-compose up -d
docker-compose down
docker-compose ps
docker logs
#Доп команды
docker system prune -f
docker-compose down -v

docker exec -it <container-name> bash

apt-get update && apt-get install -y iputils-ping curl
curl http://redis-cache:6379
ping ms-identity

#Создать пользователя
curl.exe -X POST "http://localhost:5001/api/users?username=Riad"
#Получить список 
curl.exe http://localhost:5001/api/users
# нужно выполнить это дважды чтобы понять работает lazy caching или нет
curl.exe http://localhost:5003/api/cache/test-item