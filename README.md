# The Bible Decentralised
Decentralised Bible App using IPFS

There a two versions of this app. 

IPFS Version (master branche):
https://gateway.ipfs.io/ipns/QmXmSMLprg1fxfKpns46kSYKBbZTb5puxX2eYCsrnCkhDT / https://ipfs.io/ipfs/QmX88rBmyvwZSyejuGb2XjBAiPoNtJWEPGMdJHV5xwBNJB 

This version looks for a running IPFS node. If no node is available, it uses ipfs.infure.io as gateway to load the Bible Books.

Local version (no-node branch): 
https://gateway.ipfs.io/ipns/QmYN9TQtR8JGaXqMwv3893BwpLqEEPLHjDm7TG3ue5KkSq / https://ipfs.io/ipfs/QmPoY3MKwUjsvC3vN3qiGLGpMTj24RPsDHk14z2QpZkcna

This version just loads the Bible book from local JSON files. I uploaded it on IPFS, so it's still a Dapp, but the app itself doesn't use IPFS to load files. 

***

The IPNS links are often slow, the IPFS links are faster, but changes everytime there is an update for the app.

This is a decentralised Bible web-app (Dapp). The website can be uploaded using IPFS, which is a decentralised storage. So, there is no central server or hosting, but just different nodes who all serve a bit of this website. 

The website itself also makes use of IPFS to load the different books of the Bible. The Bible books all have their own hashcode in IPFS, you can find the hashcodes below. The Bible books are stored in JSON format. This way, everybody can make a website which loads those Bible Books. 

The used Bible version is the King James Bible. 

To get IPFS work in javascript, this great library is used:

https://github.com/SilentCicero/ipfs-mini

Bootstrap 4.0 is used for the grid etc.

https://getbootstrap.com/

## Install

Both versions works out of the box, but if you can run an IPFS node, it probably runs faster.

1. Download the files from Github.
2. You can chose to run an IPFS node, but it's not necessary. If you want to, see https://ipfs.io/docs/install/ for instructions.
3. Go to the command prompt or open a Node.js command prompt, then type `ipfs daemon`
4. Open index.html
5. if it doesn't work, make sure youre running a HTTP server.


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

               `Genesis:"QmR6fYeRLJ7cR4z19xxnWuthLrurgybkQgarv8CYJmTvoa",
		Exodus:"QmfZra1jA7SocAdvjkfTfx6uCokYAPADPfR1sicyoXkSwK",
		Leviticus:"Qme2b3SUPbaeuafQSeosmwg3qG2k5cAp7Wwm8ZasiGaYJP",
		Numbers:"QmZQ7PFfo5vByr5eHQu87jjQMTxFa2wsoGvNbgZKBLytG3",
		Deuteronomy:"QmWXPtCJzeC5g8SuHtKBaQXuHxCTbqFwJ1B3pbeZSgvbJx",
		Joshua:"QmPA7YvJM7nHZbe7p85e2ZvFM6SgxrDSzzfxRpS7N89Gah",
		Judges:"QmQgvWHCRYxXBJAHj6jJZ4MEedQzoNNhvVHHd1rH8iLrMh",
		Ruth:"QmaK8iF4cQH6DQE6LLLGRH1ciqjaAeU76prTwfbrJd19WT",
                "1 Samuel":"QmPcSKsLGgGVPEFGpYTit6MswFrABEHQvapHR5CEgozw69",
		"2 Samuel":"QmQbXxvJPM494MdveSLCbfzVVaaLMZmsGi89eVKXqqaEFz",
		"1 Kings":"QmXBTLqg8HADnBkz32uGe81isYHuaR6BDK2jB2fABe6fhg",
		"2 Kings":"QmeeXx8qfjxUmLvSQYDUafGE6X4mdi2dW2QcYctFYwC9XG",
		"1 Chronicles":"QmR5A98A7YLguVvJcjwCQJTG2XS1DmExt9iDZUpimXXcDs",
		"2 Chronicles":"QmcakgLpaDsVdRsgAyiF6Y9Fxtb9gjz3e3PmzDj6ZvBGtQ",
		"Ezra":"QmWG8KxH8kQpK4VUQf5eBEq6sBhpT6Ad6br6toWdJUNmCu",
		"Nehemia":"Qmcqta8P8B49cvx5RMuSJvJZcKNabyDbLkDySyr3f2c4wQ",
		"Esther":"QmRFcPRduQPBiLzKAgQZZwM3paaKWVHdxHPwTx26KU8wPr",
		"Job":"QmPnSPquC5jfiWQXSUKnVeZn72csLqWhronWb5nk7p68nH",
		"Psalms":"QmXLFC7YNJTfDH9LNKeVDo9QnqPb2HSsNSZZVTXuR7ZqCv",
		"Proverbs":"QmQoPGcr7618hfmZk2KhTeTmoXSdn1YyLDEXezAE2pdNSp",
		"Ecclesiastes":"QmeP58iKY23GfG78tXuFCXbZTY2ErZSyGpw6VGcqvVjDPb",
		"Song of Songs":"QmZqwpxCjb5AJS2bgcWDqYHR7TD9weSmksky3k8UyKtNkE",
		"Isaiah":"Qmdx5Az27fyqsSTrFhape7dng38bswUroYPznPpnwLtcnZ",
		"Jeremiah":"QmZYxgq2tYdR689yRhPjuLJuZszwANx8Bwnw62KoyFpN7N",
		"Lamentations":"QmbVfTjsXbCuRcsso8ZBEYbStsoD2YPPL9sw3sPyF3GrxK",
		"Ezekiel":"QmYBMgiz32mcZuo8RduPg5Wo6sNkJtGaJaU5ngRPReYDTf",
		"Daniel":"QmfSwW4qg7dbGQoUdzVUMELPDj9xMBiSRrW2z1UMCBoof8",
		"Hosea":"QmbiEyopyGD2mZ62vgUBTpCKicytNYBbReACu6ZYth9nBM",
		"Joel":"QmUntsTZZaNgrSpenD81mnC1yPenQNer3TEfcSd719rPSL",
		"Amos":"QmVR6LNvxXbiSt3qBgqRgXhiXtY1XzHKqKfFKKYeue47zY",
		"Obadiah":"QmW5hv5Nc7nhCvLdVdEG9f8yFuZyqY4Y32GcEzTK3rcXHW",
		"Jonah":"QmaWUpiWvnEapfw5TMUsVXWoGG7FzQVUHRW9BuUupWFWU1",
		"Micah":"QmVViKPL1HMgbuCqporz1ryfqhEauvL2gcjbrr19wD1BxL",
		"Nahum":"QmZLEzB2VUEvQA2k68svodyxfEX7ZRHRqFUUFhyY9XxvXv",
		"Habakkuk":"QmPiWx4jAUP1BRP12Bjk76aSa3cUhymMBUQbkSdofeSrhV",
		"Zephaniah":"QmQhxGqusgQ1rWf9nFxRHi5nCjNz4UrxQRcyvRh4a5qAC4",
		"Haggai":"QmRrpSZUBuxyXZWd7i5omhB2cyeVEWi7sthn4WAGoJWEfN",
		"Zechariah":"Qmas6mAGBmejgPutspGGyjuXFqgmuLpXURDYu95kWUPZcg",
		"Malachi":"QmRYgng4EH8GWhNkSvEZK2CT98uSF31nPdqbM3mWqX6iC4",		
		Matthew:"QmW56MEx7QhGzfA9QkSdQw64kNPygs3x4hpLxtcwp6EpvU",
		Mark:"QmXnHCA3gmPvMdSArnR9iCxMFjhwejeB1iQi3k5aom1ijr",
		Luke:"QmZNSJt6uJkvdGQEVDH8K62qoMgTwurDaBFJRJ1KtJ7PoT",
		John:"QmWTgHETS6Ypdt9sTS9S7L8jjBLnTwSZtLzoQA5Z46PR7j",
		Acts:"QmeJTXss2TWdhEoWTG8Nq3fJt6MdMWfKYA9jPDHWhGZM2D",
		Romans:"QmbWpmmEMPFKt5rvXdRXyF3fs4fLLdWvDx6JTbD3JBHHq6",
		"1 Corinthians":"QmUrBwTPiLcbgFvN7ADFsAhpFW6TzH7xqNWd5fDUuoTaFq",
		"2 Corinthians":"QmZjt7AivsVmdxWpSHobKZ7MjXmRcGstePW776tzDky7ic",
		Galatians:"QmbgY1PpnmQAQYX5VJnHcDsBycQNCxfP3GqhuwG4ZnN6iF",
		Ephesians:"Qmf79fuLnnYkcyxke5vwm8bnwH2f1Un3PHdLrNTYWxWs7x",
		Philippians:"QmR6wWKfrhgePdfQvZCroP3kvkaV5ZCX89aZFTPsXFm4kw",
		Colossians:"QmSXU8Px8msMzCBu8djstQwJ31hdnZPb6Wkmg3urs5Xg1p",
		"1 Thessalonians":"QmbyjNUX4ihZzzpfSGYwL2nMNchDL3usGm27boobyj1ZpX",
		"2 Thessalonians":"QmVFuktpA3wkLrrH3ZL5XTvVJZSZQMMKsADXyUvp8yKtJb",
		"1 Timothy":"QmaCRGniou4VX4VjmF56xs1g36KN1sFb3LrWUYbxqjEGV5",
		"2 Timothy":"QmddxY2PwXgk6nCS3jFF7Vw9EjXrD63NMq7QTw58m29YWV",
		Titus:"QmYFyxGmYu5sseZMtEL67qCatgMhAZhA9G7f41uviqB5pW",
		Philemon:"QmTZE26n9HTXun6nHa3Erok4bPrRPUyU1QZdd7HSXk6bbp",
		Hebrews:"Qmd6GZE4n4ViHqiZL6p1L9U4auRt9CtwTDy5swfzJWx8SQ",
		"1 Peter":"QmXaJXUWzv6FF29w3aUBPMdEYhv3oZUzQmct1rfhjG9BRX",
		"2 Peter":"QmdZztKdKy5i44PWSwoutnKKwXYm8kNZeCLUt2PrbrE3Vm",
		"1 John":"QmPWM2CJ9RS7BBs9ccqX4K11xGnoSk5nKM5GNmQ3kVW1AM",
                "2 John":"QmfLu7oMj1DQMocLwqFkCBM2N4aF5JJv1eExxfZrpEAn9W",
                "3 John":"QmbvzsTBfXxKERy8gZMutH7P4aGii5vT5Qz53DF92XE1WR",
		Jude:"QmNeKQ9sL3WnbtvxkSdL5DjNwoHTgsiUHpRzSdCj3DoxAr",
		Revelations:"QmWNyHqJXTzeGbPNCspZ51jwvCnJVhp2R3CsTb8syVVCzQ"     `

This website is just an example on how to load IPFS files using javascript. Use it to read the Bible (very interesting) or to learn to write decentralised apps.  

## Roadmap

1. ~~load ipfs node from the website itself using ipfs.js. The problem at this moment is that automatic peer discovery doesn't work well. It works sometimes though.~~
2. ~~add all Bible books~~
3. GZIP the Bible books, which could result in faster loading
