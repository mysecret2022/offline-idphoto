# ==========================================
# 阶段 1: 静态前端构建
# ==========================================
FROM node:18-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .
RUN pnpm run build

# ==========================================
# 阶段 2: Nginx 轻量化生产镜像
# ==========================================
FROM nginx:alpine

# 安装 openssl 以支持自动生成 SSL 自签证书
RUN apk add --no-cache openssl

# 移除默认配置与静态文件
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

# 复制前端编译产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 Nginx 配置文件与入口脚本
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 暴露端口 (80: HTTP, 443: HTTPS)
EXPOSE 80 443

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
