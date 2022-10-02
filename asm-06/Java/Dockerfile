# Use official base image of Java Runtim
FROM maven:3.8.6-openjdk-18 AS builder
WORKDIR /app
COPY test .
ENTRYPOINT [ "mvn", "package" ]

FROM tomcat:10.0.26-jre8-temurin-jammy
RUN useradd -u 1111 boss
USER boss
COPY --from=builder /app/target/test*.war $CATALINA_HOME/webapps/
