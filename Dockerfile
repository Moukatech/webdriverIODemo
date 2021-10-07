FROM node

RUN apt-get update 


# install NPM
RUN npm install -g npm@latest
RUN npm --version

# install yarn 
RUN npm install -g yarn@latest --force
RUN yarn --version

# allow installing when the main user is root
ENV npm_config_unsafe_perm true

#node libraries
RUN node -p process.versions

#install chrome
# Chrome dependencies
RUN apt-get update
RUN apt-get install -y fonts-liberation libappindicator3-1 xdg-utils

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt install ./google-chrome-stable_current_amd64.deb -f -y

RUN google-chrome --version

# INSTALL PACKAGES
WORKDIR /usr/wdiodemo/
COPY package*.json ./
COPY . .
EXPOSE 8080
RUN npm install

# ON RUNNING THE IMAGE THIS COMMAND WILL BE TRIGGERED BY DEFAULT
ENTRYPOINT ["npm", "run", "test"]   