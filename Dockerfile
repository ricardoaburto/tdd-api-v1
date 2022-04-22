FROM node:14
WORKDIR /api-app
COPY package.json .
RUN npm install
RUN
COPY . .
CMD npm start && npm coverage
