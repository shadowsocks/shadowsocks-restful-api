FROM ubuntu:16.04

WORKDIR /shadowsocks-restful-api

COPY . .

RUN apt-get update && apt-get install -y curl python-dev make g++ software-properties-common supervisor

RUN set -ex && \
    add-apt-repository ppa:max-c-lv/shadowsocks-libev -y && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get update && apt-get install nodejs shadowsocks-libev -y && \
    npm i && \
    mkdir -p /var/log/supervisor && \
    cp supervisord.conf /etc/supervisor/conf.d/supervisord.conf && \
    rm supervisord.conf && \
    openssl req -x509 -sha256 -nodes -days 3365 \
    -subj  "/C=CA/ST=QC/O=Company Inc/CN=example.com" \
    -newkey rsa:2048 -keyout server.key \
    -out server.cert


RUN apt-get purge -y curl git software-properties-common && apt-get clean -y && apt-get autoclean -y && apt-get autoremove -y && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


CMD ["/usr/bin/supervisord"]