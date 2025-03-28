# Step 1: Build the app
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the app
RUN npm run build

EXPOSE 8080

CMD ["npm", "run","preview"]