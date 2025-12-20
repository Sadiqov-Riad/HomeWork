docker network create webapi_network

docker run -d --name postgres-container \
  --network webapi_network \
  --platform linux/amd64 \
  -e "POSTGRES_USER=riad" \
  -e "POSTGRES_PASSWORD=coolpass123" \
  -e "POSTGRES_DB=mydb" \
  -v $(pwd)/init.sql:/docker-entrypoint-initdb.d/init.sql \
  postgres:latest

docker build -t webapi-img ./WebApi

docker run -d --name webapi-container \
  --network webapi_network \
  -e "ConnectionStrings__DefaultConnection=Host=postgres-container;Port=5432;Database=mydb;Username=riad;Password=coolpass123" \
  webapi-img

docker build -t mvc-img ./MvcApp

docker run -d --name mvc-container \
  --network webapi_network \
  -p 8001:8080 \
  mvc-img

#Проверки
docker ps
docker logs webapi-container
docker logs mvc-container
docker exec -it postgres-container psql -U riad -d mydb -c "SELECT * FROM \"Users\";"
