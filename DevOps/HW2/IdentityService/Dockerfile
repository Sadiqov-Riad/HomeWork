# Используем SDK 9.0 для сборки
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY IdentityService.csproj ./
RUN dotnet restore IdentityService.csproj

COPY . .
RUN dotnet publish IdentityService.csproj -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "IdentityService.dll"]