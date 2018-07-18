//code to get the number of articles in the page
host = window.location.hostname;
console.log(host);

if(host=='www.indiatimes.com' || host == 'indiatimes.com')
{
 	var length_of_article = 0;
	if(length_of_article = $('*[class^="parent_section"]').length){		 
		output(length_of_article);
	}
	else{
		output(length_of_article);	
	}
 }
else if(host == 'news.google.com' || host == 'www.news.google.com')
{
	var articles=document.getElementsByClassName("xrnccd");
	output(articles.length);	 
}
else{
	console.log('code is not calibrated as per thsi website');
}

function output(count)
{
	console.log(count +" articles in the page");
}


//code to count the number of images in the page

var images=document.getElementsByTagName("img");

if(images.length){
	
	console.log(images.length +" image in the page");
}
else{
	console.log("0 image in the web page");
}

//code to count the number of exit links in the page

var data=document.getElementsByTagName("a");
var count = 0;
for(var x=0; x<data.length; x++) {
	href1 = data[x].getAttribute('href');
 	var rgxp = new RegExp(host, "g");
	if(href1!=null)
	{
		if (href1.charAt(0)!='.' && href1.charAt(0)!='/' && (!href1.match(rgxp)))
		{
			count++;
			//console.log(href1);

		}
	}
	
	//console.log(el);
}
console.log(count+"  exit links in the page");

 