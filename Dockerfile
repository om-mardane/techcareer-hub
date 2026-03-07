FROM node:20-alpine

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

# Set environment variables for Render
ENV DATABASE_URL="file:./dev.db"
ENV JWT_SECRET="this_is_a_very_secure_secret_for_production"

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
