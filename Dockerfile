# stage 1: builder
# FROM node:18.18.2-bullseye-slim as builder
FROM node:20.11.0-alpine3.19 as builder

ARG MY_ENV=site
ENV ENV_VALUE=$MY_ENV

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com

RUN --mount=type=cache,target=/app/.npm \
  npm set cache /app/.npm && \
  npm ci
# RUN npm install

COPY . .

RUN npm run build:${ENV_VALUE}

# stage 2: prod
# FROM nginx:1.24-bullseye
FROM nginx:1.25.3-alpine3.18

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
