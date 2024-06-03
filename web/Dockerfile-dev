# Stage 1: Construir a aplicação
FROM node:20.13-alpine3.20 as builder

# Instalar o gerenciador de pacotes pnpm globalmente
RUN npm install -g pnpm

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o package.json e o arquivo de lock para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências
RUN pnpm install

# Copiar o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Compilar a aplicação
RUN pnpm run build

# Stage 2: Configurar o servidor Nginx e implantar a aplicação
FROM nginx:latest

# Copiar o arquivo de configuração do Nginx para o contêiner
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar os arquivos da aplicação compilada para o diretório de conteúdo do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta 80 para o servidor Nginx
EXPOSE 80

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
