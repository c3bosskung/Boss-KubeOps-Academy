FROM bythewaytech/tomcat10
LABEL maintainer=”c3bosskung@gmail.com”
ENV CATALINA_HOME=/opt/tomcat10
ENV PATH=$CATALINA_HOME/bin:$PATH
COPY webserver.war $CATALINA_HOME/webapps
EXPOSE 8080
CMD ["catalina.sh", "run"]