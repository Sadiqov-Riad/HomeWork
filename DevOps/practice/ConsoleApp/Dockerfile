FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /build
COPY . .
RUN dotnet publish -c Release -o /dist

FROM mcr.microsoft.com/dotnet/runtime:9.0 AS app
WORKDIR /app
COPY --from=build /dist .
ENTRYPOINT ["dotnet", "ConsoleApp.dll"]
