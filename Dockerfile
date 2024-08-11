# Stage 1: Build the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with the 'serve' package
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install 'serve' globally
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=build /app/dist /app

# Expose the port the app will run on
EXPOSE 5000

# Serve the app on port 5000
CMD ["serve", "-s", ".", "-l", "5000"]
