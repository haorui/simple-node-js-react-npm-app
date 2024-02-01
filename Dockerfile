# 使用官方的 Node.js 镜像作为基础
FROM node:18.19.0-alpine3.18 as builder

# 定义参数
ARG MY_ENV=prod
ENV ENV_VALUE=$MY_ENV

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装应用依赖
RUN npm config set registry https://registry.npmmirror.com

RUN --mount=type=cache,target=/app/.npm \
  npm set cache /app/.npm && \
  npm ci
# RUN npm install

# 复制本地应用到工作目录
COPY . .

# RUN npm run build:site
RUN npm run build:${ENV_VALUE}

# 使用Nginx 作为基础镜像，用于运行静态文件
FROM nginx:1.25.3-alpine3.18

# 将构建生成的静态文件复制到nginx的默认站点目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露nginx默认的http端口
EXPOSE 80

# nginx启动命令
CMD [ "nginx", "-g", "daemon off;" ]
