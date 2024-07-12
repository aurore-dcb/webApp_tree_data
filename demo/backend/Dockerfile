FROM openjdk:17-jdk-slim

RUN apt-get update && apt-get install -y maven
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests
RUN mv target/demo-0.0.1-SNAPSHOT.jar app-1.0.0.jar
ENTRYPOINT [ "java" , "-jar", "app-1.0.0.jar"]