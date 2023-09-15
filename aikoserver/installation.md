# Aiko-Server Installation

## Software installation - release
```
wget --no-check-certificate -O Aiko-Server.sh https://raw.githubusercontent.com/AikoPanel/Aiko-Server-Script/master/install.sh && bash Aiko-Server.sh
```

## Docker

### install Environment
Centos
```centos
yum install -y yum-utils
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce docker-ce-cli containerd.io -y
systemctl start docker
systemctl enable docker
```

Ubuntu
```ubuntu
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
systemctl start docker
systemctl enable docker
```

Docker-compose ( if you have using it )
```docker-compose
curl -fsSL https://get.docker.com | bash -s docker
curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### Docker installation
- Edit your configuration file `aiko.yml`
- Choose FORMAT config `yml` or `json`
- Run docker command
```
docker pull aikocute/aikocutehotme:latest && docker run --restart=always --name Aiko-Server -d \
  -e DOMAIN=<your_domain_value> \
  -e EXPIRE=90 \
  -e CONFIGPATH=/etc/Aiko-Server/aiko.yml \
  -v ${PATH_TO_CONFIG}/aiko.yml:/etc/Aiko-Server/aiko.yml \
  --network=host \
  aikocute/aikocutehotme:latest
```

## Docker-compose installation
```
git clone https://github.com/AikoPanel/Aiko-Server-Script.git
cd Aiko-Server-Script
```

- Edit your configuration file `aiko.yml`
- Edit your docker-compose.yml file
- Run `docker-compose up -d`