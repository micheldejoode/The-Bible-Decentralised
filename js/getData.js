//search for an IPFS node at 127.0.0.1:5001, so make sure youre running an IPFS node 
//ipfs.setProvider();
//var ipfs = new IPFS({ host: 'ipfs.infura.io', protocol: 'https' });

var ipfs = new IPFS();
//load Genesis by default
getData("QmR6fYeRLJ7cR4z19xxnWuthLrurgybkQgarv8CYJmTvoa");


function getData(hashcode) {
      
//get file from ipfs with the hashcode	
ipfs.cat(hashcode, function (err, datasource) {
      
      	  
      if (err) {
        
		return console.error('Error - ipfs files cat', err, res)
      }
	  
      var temp = datasource.toString(); 
	  var obj = eval(temp); //make object from json
	  
      var chapter = obj[1].VerseName.split(":");
      chapter[0] = parseInt(chapter[0]);
	  
	    
	  document.getElementById("chapters").innerHTML = "<a id=\"" + chapter[0] + "\"" + "class=\"ChapNumber\"" + " href=\"#\">" + chapter[0] + "</a>" + " ";	  
      var temp;
	  
	  for (i = 1; i < obj.length; i++) { 
	  
	  temp = obj[i].VerseName.split(":");
	  temp = parseInt(temp);
	  
      if (temp == (chapter[0]) + 1) {
       
      chapter[0] = temp;
     
	  document.getElementById("chapters").innerHTML += "<a id=\"" + chapter[0] + "\"" + "class=\"ChapNumber\"" + " href=\"#\">" + chapter[0] + "</a>" + " ";
	  }	  //end of if statement
       	
	 
	  }//end of for loop
	

    //after all is loaded, listen for clicks on chapter number, then, load it.		
	document.body.onclick= function(f){
		  f=window.event? event.srcElement: f.target;
          if(f.className && f.className.indexOf('ChapNumber')!=-1)
				{
				loadChapter(f.id,obj)
                console.log("Get Bible chapter: " + f.id)	
				
				}
		  }
	
	// load first chapter of Bible Book
	loadChapter(1,obj)
	
	})//end ipfs.catText
}//end function getData

function loadChapter(ChapterNumber,BibleText) {
	console.log("Loading the requested chapter")
	
	//Show name of bible book
	document.getElementById("output").innerHTML = "<h1>" + BibleText[0].BibleBook + "</h1>"
	for (x = 1; x < BibleText.length; x++) {
		var tijdelijk = BibleText[x].VerseName.split(":");
	    tijdelijk = parseInt(tijdelijk);
	      
	    if (ChapterNumber == tijdelijk) {
			document.getElementById("output").innerHTML += BibleText[x].VerseName + " " + BibleText[x].Verse + "<br>";
			//console.log(BibleText[x].Verse)
		}
	  
		
		
	}
}

// Wait for the page to load first
        window.onload = function() {
          
		  document.onclick= function(e){
		  e=window.event? event.srcElement: e.target;
          if(e.className && e.className.indexOf('Books')!=-1)
				{
				getData(list[e.id]);
                console.log("Get Bible Book: "+e.id)	
				}
		  }
		  
        }
		  /*
          */