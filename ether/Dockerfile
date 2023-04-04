FROM ethereum/client-go:latest
WORKDIR /geth

COPY genesis.json .
COPY ./keystore ./keystore

RUN geth --datadir . init ./genesis.json

ENTRYPOINT [ "geth" ]
