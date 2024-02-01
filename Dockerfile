FROM node:18.19.0-alpine3.18 as builder

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com
RUN --mount=type=cache,target=/app/.npm \
  npm set cache /app/.npm && \
  npm ci

COPY . .

RUN npm run build

FROM nginx:1.25.3-alpine3.18

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
