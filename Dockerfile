FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/src/app

# Install dependencies
COPY . .

EXPOSE 3000
EXPOSE 9615
RUN npm install
CMD ["pm2-runtime", "main.js", "--web"]
