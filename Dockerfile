FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY . .

EXPOSE 3000
EXPOSE 8080
RUN npm install
CMD ["pm2-runtime", "main.js", "--web", "8080"]