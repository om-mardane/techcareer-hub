FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies needed for SQLite and Prisma
RUN apk add --no-cache openssl

# Copy package.json and lockfile
COPY package.json package-lock.json* ./

# Install dependencies (including devDependencies for Prisma)
RUN npm install

# Copy all source files
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
