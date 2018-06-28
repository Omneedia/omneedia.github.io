#!/bin/bash

OMNEEDIA=/omneedia
OMNEEDIA_WORKER=$OMNEEDIA/Worker

[ -d ".tmp" ] || mkdir .tmp
rm -rf .tmp/wgetrc || true
[ -d "$OMNEEDIA" ] || mkdir -p $OMNEEDIA

if [ -z "$PROXY_HOST" ]
then
    echo "use_proxy = off" >> .tmp/wgetrc
else
	echo "http_proxy = $PROXY_HOST" >> .tmp/wgetrc
	echo "https_proxy = $PROXY_HOST" >> .tmp/wgetrc
	echo "use_proxy = on" >> .tmp/wgetrc
	export http_proxy=$PROXY_HOST
	export https_proxy=$PROXY_HOST
    echo "Acquire::Proxy $PROXY_HOST;" >> /etc/apt.conf
	echo $PROXY_HOST >> $OMNEEDIA/.proxy
fi

PUBLIC_IP="`wget -qO- http://ipinfo.io/ip`"
PLATFORM="`dpkg --print-architecture`"

echo Installing omneedia worker
echo --------------------------
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common glances
wget -qO- https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y docker.io nodejs git glusterfs-server attr
npm i -g npm
rm -Rf .tmp
cd $OMNEEDIA
git clone https://github.com/Omneedia/setup-worker setup
git clone https://github.com/Omneedia/prod.worker Worker
echo $PUBLIC_IP > $OMNEEDIA_WORKER/.ip
cd $OMNEEDIA_WORKER/bin
npm install
cd ../..
cd setup
npm install
node setup
cd ..
#rm -Rf setup
