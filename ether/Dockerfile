FROM ethereum/client-go:latest
WORKDIR /root

COPY genesis.json .
COPY config.toml .
COPY ./keystore .ethereum/keystore

RUN geth init ./genesis.json


RUN pwd
ENTRYPOINT [ "geth" ]
