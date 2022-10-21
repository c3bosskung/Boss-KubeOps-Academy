FROM openjdk:14
RUN mkdir maven
RUN mkdir  Lab
COPY ./Lab/exam-test-01-2/ Lab
COPY ./Lab/apache-maven-3.8.1 maven
WORKDIR /Lab
ENV PATH=/maven/bin:$PATH
RUN mvn clean package -DskipTests
RUN cd target
ENTRYPOINT [ "java", "-jar", "--enable-preview", "demo-0.0.1.jar"]