#!/bin/sh
set -e

CERTS_DIR="/etc/nginx/certs"
mkdir -p "$CERTS_DIR"

# 如果未挂载证书，自动生成 10 年有效期的自签名 SSL 证书
if [ ! -f "$CERTS_DIR/cert.pem" ] || [ ! -f "$CERTS_DIR/key.pem" ]; then
    echo "[INFO] 未检测到外部 SSL 证书，正在自动生成自签名证书..."
    openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
        -keyout "$CERTS_DIR/key.pem" \
        -out "$CERTS_DIR/cert.pem" \
        -subj "/C=CN/ST=Beijing/L=Beijing/O=OfflineIDPhoto/CN=localhost" 2>/dev/null
    echo "[SUCCESS] 自签名证书自动生成完毕，HTTPS (443) 已就绪！"
fi

exec "$@"
