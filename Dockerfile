FROM node:20.13-alpine3.20


RUN npm install -g pnpm

WORKDIR /app

COPY . .


RUN pnpm install

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "run", "preview" ]
