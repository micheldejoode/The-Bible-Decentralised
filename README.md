# The Bible Decentralised
Decentralised Bible App using IPFS

https://gateway.ipfs.io/ipns/QmXmSMLprg1fxfKpns46kSYKBbZTb5puxX2eYCsrnCkhDT

This is a decentralised Bible web-app (Dapp). The website can be uploaded using IPFS, which is a decentralised storage. So, there is no central server or hosting, but just different nodes who all serve a bit of this website. 

The website itself also makes use of IPFS to load the different books of the Bible. The Bible books all have their own hashcode in IPFS, you can find the hashcodes below. The Bible books are stored in JSON format. This way, everybody can make a website which loads those Bible Books. 

The used Bible version is the King James Bible. 

To get IPFS work in javascript, this great library is used:

https://github.com/pelle/browser-ipfs

Bootstrap 4.0 is used for the grid etc.

https://getbootstrap.com/

## Install

1. Download the files from Github.
2. At this moment you need a local IPFS node to make this website work. See https://ipfs.io/docs/install/ for instructions.
3. Go to the command prompt or open a Node.js command prompt, then type `ipfs daemon`
4. Open index.html

The website is located at: 
https://gateway.ipfs.io/ipns/QmXmSMLprg1fxfKpns46kSYKBbZTb5puxX2eYCsrnCkhDT

## Do it yourself

If you want to upload your own version of this website (or any website) to IPFS, do the following:

1. Go to the command prompt
2. `ipfs add -r mysite` where MYSITE is the path to your website directory. 
3. you will see the different hashes of the files. The last hash is the one which directs to your site itself.
4. if you want other people to visit your IPFS website, you can give them this url: ipfs.io/ipfs/yourhashcode
5. But everytime you update your website, you will get a different hash. That's where IPNS comes in. 
6. In the command prompt, do: `publish name yourhashcode`
7. Now you get another hashcode, that's the url of your website. It becomes: ipfs.io/ipns/otherhashcode.

Everytime you will do a `publish name hashcode` you will bind the latest hashcode of your website to the IPNS hashcode, which will be the same everytime. You can give that url to other people to view your website.

## Bible book hashcodes

These are the hashcodes of the Bible books. You can view them using an IPFS node by this command: `ipfs cat hashcode`
Or you can view them on ipfs.io/ipfs/hashcode (example: ipfs.io/ipfs/QmR6fYeRLJ7cR4z19xxnWuthLrurgybkQgarv8CYJmTvoa)

The books are in JSON format.

Genesis:"QmR6fYeRLJ7cR4z19xxnWuthLrurgybkQgarv8CYJmTvoa"
Exodus:"QmfZra1jA7SocAdvjkfTfx6uCokYAPADPfR1sicyoXkSwK"
1 John:"QmPWM2CJ9RS7BBs9ccqX4K11xGnoSk5nKM5GNmQ3kVW1AM"

This website is just an example on how to load IPFS files using javascript. Use it to read the Bible (very interesting) or to learn to write decentralised apps. Not all Bible books are available right now, more books will be added. 

## Roadmap

1. load ipfs node from the website itself using ipfs.js. The problem at this moment is that automatic peer discovery doesn't work well. It works sometimes though, I will post an example soon. 
2. add all Bible books
3. GZIP the Bible books, which could result in faster loading
