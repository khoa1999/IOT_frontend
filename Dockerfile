# Build stage
#FROM node:18-alpine AS build

#Set working directory
#WORKDIR /workspace

# Install dependencies
#COPY package.json package-lock.json ./
#RUN npm install


# Copy source code and build
#COPY . .
#RUN npm run build

# Stage 2: Serve the React app with Nginx
#FROM nginx:alpine

# Remove default Nginx static assets
#RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the previous stage to Nginx's web directory
#COPY --from=build /workspace/dist /usr/share/nginx/html

# Copy custom Nginx configuration
#COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
#EXPOSE 8080

# Start Nginx
#CMD ["/bin/sh", "-c", "envsubst '$$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"]

# Set the PORT environment variable for Google Cloud Run
#ENV PORT 8080

# Start Nginx
#CMD ["nginx", "-g", "daemon off;"]
#COPY nginx.conf /etc/nginx/conf.d/configfile.template
#ENV PORT 8080
#ENV HOST 0.0.0.0
#EXPOSE 8080
#CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /workspace

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the production version of the Vite application
RUN npm run build

# Install a static file server to serve the production build
RUN npm install -g serve

# Expose the port that the server will run on
ENV PORT 8080
EXPOSE 8080

# Start the server
CMD ["serve", "-s", "dist", "-l", "8080"]