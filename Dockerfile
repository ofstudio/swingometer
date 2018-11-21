FROM node:10-alpine AS builder
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY [".env.production.*", "./"]
COPY ["public", "./public"]
COPY ["src", "./src"]
RUN npm run build

FROM nginx:alpine
COPY --from=builder ["/app/build", "/usr/share/nginx/html"]
