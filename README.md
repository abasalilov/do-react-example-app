server {
listen 80 default_server;
server_name YOURDOMAIN.HERE;
location / {
#auth_basic "Restricted Content";
#auth_basic_user_file /home/your/basic/auth/passwd_file;
proxy_pass http://localhost:3000; #or any port number here
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
proxy_cache_bypass \$http_upgrade;
}
}

### Install Yarn on Ubuntu

- https://vitux.com/how-to-install-yarn-npm-client-on-ubuntu-and-manage-dependencies-through-it/
- Step 1) Install Curl for adding GPG key for Yarn: sudo apt install curl
- Step 2) Add Yarn gpg key: curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
- Step 3) Add Yarn APT repository to your system: echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
- Step 4) Upgrade your system’s Repository Index: sudo apt-get update
- Step 5) Install Yarn: sudo apt-get install yarn
- Step 5a) Verify Yarn Installation: yarn --version
