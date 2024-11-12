# Base Image
FROM node:latest

# Working Dir
WORKDIR /app

# Copy the Package.json and Package-lock.json
COPY package*.json /app/

# Install the libraries and Dependencies
RUN npm install

# Copy the Code
COPY . .

# Expose the port 
EXPOSE 5173

# Start the Server
CMD ["npm" ,"run","dev"]
