# Use official base image of Java Runtim
FROM maven:3.8.6-openjdk-18 AS builder
WORKDIR /app
COPY test .
ENTRYPOINT [ "mvn", "package" ]

FROM tomcat:jre8-alpine
COPY --from=builder /app/target/test*.war $CATALINA_HOME/webapps/simple.war/
