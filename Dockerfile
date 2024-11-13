#----Stage 1----
# Base Image
FROM node:18 AS small

# Suppress experimental warnings
#ENV NODE_NO_WARNINGS=1

# Working Dir
WORKDIR /app

# Copy the Package.json and Package-lock.json
COPY package*.json /app/

# Install the libraries and Dependencies
RUN npm install

#------Stage 2-----
FROM node:18-slim 

WORKDIR /app

COPY --from=small /app/node_modules/ /app/node_modules/

# Copy the Code
COPY . .

# Expose the port 
EXPOSE 5173

# Start the Server
CMD ["npm" ,"run","dev"]
