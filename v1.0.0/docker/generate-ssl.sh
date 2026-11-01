#!/usr/bin/env bash
set -e

# 创建证书输出目录
CERTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/certs"
mkdir -p "${CERTS_DIR}"

echo "[INFO] 正在为本地局域网生成自签名 SSL 证书..."

# 获取本机局域网 IP
LOCAL_IP=$(hostname -I 2>/dev/null | awk '{print $1}' || echo "127.0.0.1")

# 生成 OpenSSL 配置文件以包含 SAN (Subject Alternative Name)
cat > "${CERTS_DIR}/openssl.cnf" <<EOF
[req]
default_bits = 2048
prompt = no
default_md = sha256
distinguished_name = dn
x509_extensions = v3_req

[dn]
C = CN
ST = Beijing
L = Beijing
O = LocalDev
OU = OfflineIDPhoto
CN = localhost

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = localhost
IP.1 = 127.0.0.1
IP.2 = ${LOCAL_IP}
EOF

# 生成私钥与自签证书 (有效期 3650 天)
openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
  -keyout "${CERTS_DIR}/key.pem" \
  -out "${CERTS_DIR}/cert.pem" \
  -config "${CERTS_DIR}/openssl.cnf"

rm -f "${CERTS_DIR}/openssl.cnf"

echo "[SUCCESS] 自签名证书生成成功："
echo "  - 证书文件: ${CERTS_DIR}/cert.pem"
echo "  - 私钥文件: ${CERTS_DIR}/key.pem"
echo "  - 支持域名与 IP: localhost, 127.0.0.1, ${LOCAL_IP}"
