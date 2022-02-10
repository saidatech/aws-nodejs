
// styling the page body
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.height = "100%";
document.body.style.width = "100%";

// creating the first item
var myFirstDiv = document.createElement("div"),
    myFirstText = document.createTextNode("Hi, Olabanji"),
    myFirstSpan = document.createElement("span"),
    myFirstSpanText = document.createTextNode("this is a test website ");

myFirstDiv.appendChild(myFirstText);
myFirstSpan.appendChild(myFirstSpanText);
myFirstDiv.appendChild(myFirstSpan);
document.body.appendChild(myFirstDiv);

myFirstDiv.style = "width:55%;height:250px;background:#EA4335;text-align:center;margin:10px 2.5%;color:#fff;font-size:60px;font-weight:700;padding:20px;float:left;box-sizing:border-box";

myFirstSpan.style = "display:block;background:#EA4335;font-size:20px;text-transform:uppercase;";

// creating the second item

var mySecondDiv = document.createElement("div"),
    mySecondText = document.createTextNode("Welcome");
    

mySecondDiv.appendChild(mySecondText);
document.body.appendChild(mySecondDiv);

mySecondDiv.style = "width:37.5%;height:250px;background:#34A853;text-align:center;margin:10px 2.5% 10px 0;color:#fff;font-size:100px;font-weight:700;padding:20px;float:right; opacity:0.5;transition:all 0.5s linear;transform: scale(0.9,0.9);box-sizing:border-box";


mySecondDiv.onmouseover = function () {
  'use strict';
  this.style.opacity = "1";
  this.style.transform = "scale(1,1)";
}

mySecondDiv.onmouseout = function () {
  'use strict';
  this.style.opacity = "0.5";
  this.style.transform = "scale(0.9,0.9)";
}


// creating the third item

var myThirdDiv = document.createElement("div"),
    myThirdText = document.createTextNode("Deployed Right"),
    myFirstParagraph = document.createElement("p"),
    FirstParagraphText = document.createTextNode("this is the first web page made only by javascript");

myThirdDiv.appendChild(myThirdText);
myFirstParagraph.appendChild(FirstParagraphText);
myThirdDiv.appendChild(myFirstParagraph);
document.body.appendChild(myThirdDiv);

myThirdDiv.style = "width:55%;height:250px;background:#4285F4;text-align:center;margin:10px 2.5%;color:#fff;font-size:50px;font-weight:700;padding:20px;float:right;box-sizing:border-box";

myFirstParagraph.style = "font-size:18px;";

// creating the forth item

var myforthDiv = document.createElement("div"),
    mySecondSpan = document.createElement("span"),
    myforthText = document.createTextNode("Test"),
    myWebSite = document.createElement("a"),
    myWebSiteText = document.createTextNode("my latest website");
    

mySecondSpan.appendChild(myforthText);
myWebSite.appendChild(myWebSiteText);
myWebSite.href = "/";
myWebSite.target = "_black";
myforthDiv.appendChild(mySecondSpan);
myforthDiv.appendChild(myWebSite);
document.body.appendChild(myforthDiv);

myforthDiv.style = "width:37.5%;height:250px;background:url('http://ralucaloteanu.ro/wp-content/uploads/2015/08/vacanta-e1472106828275.png');background-size:cover;background-attachment:fixed;text-align:center;margin:10px 0 10px 2.5%;color:#fff;font-size:100px;font-weight:700;float:right;position:relative ";

mySecondSpan.style = "opacity:0.5;display:block;width:100%;height:100%;padding:10px;transition:all 0.5s linear;box-sizing:border-box"

myWebSite.style = "font-size:20px;text-decoration:none;color:#fff;position:absolute;bottom:20px;left:50%;transform:translateX(-50%);z-index:5;;text-transform:uppercase"

myforthDiv.onmouseover = function () {
  'use strict';
  mySecondSpan.style.backgroundColor = "rgba(0,0,0,.6)";
  mySecondSpan.style.opacity = "1"
}

myforthDiv.onmouseout = function () {
  'use strict';
  mySecondSpan.style.backgroundColor = "rgba(0,0,0,0)";
  mySecondSpan.style.opacity = "0.5"
  
}

// creating the fifth item


// the image hover effect 
var imageEffectIn = function () {
  'use strict';
  this.style.transform = "scale(1.1,1.1)";
  this.style.boxShadow =" 5px 5px 15px #000";
},
    imageEffectOut = function () {
  'use strict';
  this.style.transform = "scale(1,1)";
  this.style.boxShadow =" 0 0";
};

// the main styles of the social media

var mainSocialImageStyle = "display:block;width: 65%;border-radius:50%;margin:20px auto;cursor:pointer;transition:all 0.3s linear",
    mainImageStyle = "width:29.2%;min-height:250px;text-align:center;margin:10px 1% 10px 2.5%;color:#fff;font-size:50px;font-weight:700;padding:20px;float:left;box-sizing:border-box";

var myFifthDiv = document.createElement("div"),
    myFifthText = document.createTextNode("Check this out"),
    myFacebookLink = document.createElement("a"),
    myFacebook = document.createElement("img");

myFifthDiv.appendChild(myFifthText);
myFacebookLink.appendChild(myFacebook);
myFifthDiv.appendChild(myFacebookLink);
myFacebookLink.href = "https://www.facebook.com";
myFacebookLink.target = "_blank";
myFacebook.src = "https://scontent.fcai1-2.fna.fbcdn.net/v/t1.0-1/p160x160/11889671_718739274924676_6895739912666831917_n.jpg?_nc_cat=0&oh=40e851807f22e89395ea60bcc26c5937&oe=5BBC0D5F";

document.body.appendChild(myFifthDiv);

myFacebook.style = mainSocialImageStyle;

myFifthDiv.style = mainImageStyle + ";background:#3B5998";

myFacebook.onmouseover = imageEffectIn;

myFacebook.onmouseout = imageEffectOut;

// creating the sixth item

var mySixthDiv = document.createElement("div"),
    mySixthText = document.createTextNode("Added a picture"),
    myCodepenLink = document.createElement("a"),
    myCodepen = document.createElement("img");

mySixthDiv.appendChild(mySixthText);
myCodepenLink.appendChild(myCodepen);
mySixthDiv.appendChild(myCodepenLink);
document.body.appendChild(mySixthDiv);

myCodepen.style = mainSocialImageStyle;

mySixthDiv.style = mainImageStyle + ";background:#3B3838";

myCodepen.onmouseover = imageEffectIn;

myCodepen.onmouseout = imageEffectOut;

// creating the seventh item

var mySeventhDiv = document.createElement("div"),
    mySeventhText = document.createTextNode("07"),
    myGoogleLink = document.createElement("a"),
    myGoogle = document.createElement("img");

mySeventhDiv.appendChild(mySeventhText);
myGoogleLink.appendChild(myGoogle);
mySeventhDiv.appendChild(myGoogleLink);
myGoogleLink.href = "https://plus.google.com/115875826373261470610";
myGoogleLink.target = "_blank";
myGoogle.src = "https://lh3.googleusercontent.com/AD7OfWoFoZlS7JBrba2JoO4zR3v63oQjF4Jqo_JtuIlX95VcRv4oJYr4w1SaET-kMoMwMiZNU1CHT3dv=w1600-h900-no";
myGoogle.alt = "google plus"
document.body.appendChild(mySeventhDiv);

myGoogle.style = mainSocialImageStyle;

mySeventhDiv.style = mainImageStyle + ";background:#DB4437";

myGoogle.onmouseover = imageEffectIn;

myGoogle.onmouseout = imageEffectOut;

// creating the eighth item
var myEighthDiv = document.createElement("div"),
    myEighthText = document.createTextNode("footer"),
    myLastSpan = document.createElement("span"),
    myLastSpanText = document.createTextNode("all rights reserved");

myLastSpan.appendChild(myLastSpanText);
myEighthDiv.appendChild(myEighthText);
myEighthDiv.appendChild(myLastSpan);
document.body.appendChild(myEighthDiv);

myEighthDiv.style = "width:100%;height:100px;background:#FAC836;font-size:40px;font-weight:700;text-align:center;padding:10px;float:left;color:#fff;box-sizing:border-box";

myLastSpan.style = "display:block;font-size:20px;font-weight:normal;text-transform:capitalize;"





// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
// 	res.send('testing auto scaling')
// })

// var server = app.listen(3000, function () {
// 	var host = server.address().address
// 	var port = server.address().port
// 	console.log('Server listening at http://%s:%s', host, port)
// })
