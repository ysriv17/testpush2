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

# Stage 2: Serve the React app using a lightweight web server
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if you have one
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port Nginx will serve the app on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
