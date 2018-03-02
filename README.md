# The Bible Decentralised
Decentralised Bible App using IPFS

https://gateway.ipfs.io/ipns/QmXmSMLprg1fxfKpns46kSYKBbZTb5puxX2eYCsrnCkhDT

This is a decentralised web-app (Dapp). The website can be uploaded using IPFS, which is a decentralised storage. So, there is no central server or hosting, but just different nodes who all serve a bit of this website. 

The website itself allso makes use of IPFS to load the different books of the Bible. The Bible books all have their own hashcode in IPFS, you can find the hashcodes in the js code. The Bible books are stored in JSON format. This way, everybody can make a website which loads those Bible Books. 

## Install

1. Download the files from Github.
2. At this moment you need a local IPFS node to make this website work. See https://ipfs.io/docs/install/ for instructions.
3. Go to the command prompt or open a Node.js command prompt, then type `ipfs daemon`
4. Open index.html

The website is located at: 
https://gateway.ipfs.io/ipns/QmXmSMLprg1fxfKpns46kSYKBbZTb5puxX2eYCsrnCkhDT

This website is just an example on how to load IPFS files using javascript. Use it to read the Bible (very interesting) or to learn to write decentralised apps. Not all Bible books are available right now, more books will be added. 

## Roadmap

1. load ipfs node from the website itself using ipfs.js. The problem at this moment is that automatic peer discovery doesn't work well. It works sometimes though, I will post an example soon. 
2. add all Bible books
3. GZIP the Bible books, which could result in faster loading
