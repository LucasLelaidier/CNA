FROM postgres
ENV POSTGRES_DB cnadb
COPY init.sql /docker-entrypoint-initdb.d/