FROM ethereum/client-go:latest
WORKDIR /root

COPY genesis.json .
COPY ./keystore .ethereum/keystore

RUN geth init ./genesis.json

ENTRYPOINT [ "geth" ]
