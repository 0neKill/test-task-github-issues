FROM node:20-alpine as builder
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]