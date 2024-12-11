# Use an official Nginx image to serve static files
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the contents of your project folder into the container's web directory
COPY . .

# Expose the port that Nginx will use
EXPOSE 80

# The default command to run Nginx
CMD ["nginx", "-g", "daemon off;"]