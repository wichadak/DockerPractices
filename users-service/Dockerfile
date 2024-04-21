# Use Node 12.16 LTS as the base image.
FROM node:16.14

# Add everything in the current directory to our image, in the 'app' folder.
COPY . /app

# Install dependencies
RUN cd /app; \
    npm install --production

# Expose our server port.
EXPOSE 6001

# Run our app.
CMD ["node", "/app/index.js"]
