# Use a lightweight base image
FROM nginx:alpine

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Copy the current directory contents into the container at /usr/share/nginx/html
COPY  /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the web server
CMD ["nginx", "-g", "daemon off;"]
