# Build stage
FROM node:18-alpine AS build

#Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Remove default Nginx static assets
#RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the previous stage to Nginx's web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
#COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
#CMD ["/bin/sh", "-c", "envsubst '$$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"]

# Start Nginx
#CMD ["nginx", "-g", "daemon off;"]
COPY nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"