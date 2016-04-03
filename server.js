var http = require('http');
var fs = require('fs');
  
var page = '<html><head><meta charset=utf-8><script>function start(){var message = document.getElementById("text").value;if(message !== ""){for(var i = 0; i < message.length; i++){if(message[i] == " "){ message = message.replace(" ","-");}};document.getElementById("content").innerHTML = "<a href=/"+message+" >Send</a>";}else  return;}</script><style>a{display:block;width:100%;height: 50px;line-height: 50px; background: #2c2;text-align:center;text-decoration:none;color: white;}#text{width:100%;font-size:2em;height:20%;}.header{background:orange; height: 20px; line-height: 20px;font-size:20px;color:white;padding: 2% 5%;margin-bottom: 50px;}#place{background:orange;}.content{background:#333;color:white;padding: 5% 3% 3%;margin: 1px 0;}input{margin: 2% 0;}</style></head><body><div class="header">Welcome to vaskia chat</div>Try to make your own post<br><input type="text"  id="text" ><div id="content"><a href="#" onmouseover="start();"></a></div></body></html>';
//onmouseover="start()"
//position:fixed; top:83%; left:83%;
http.createServer(function(req,res){
var count = true; 
if(req.url !== '/'){
//""
if(count){
		var message = req.url.toString().slice(1);
		for(var i = 0; i < message.length; i++){if(message[i] == "-"){ message = message.replace("-"," ");}}
				page.slice(-14);
				page += '<div class="content">'+message+'</div></body></html>';
count = false;

				res.writeHead(200,{'Content-Type':'text/html'});
				res.end('<p style="font-size:4em;padding:10%;">Do you like our chat?<a href="/">Yes!</a></p> ');

							
}
else {
res.writeHead(200,{'Content-Type':'text/html'});
res.end('Your message sent! Do you want to came <a href="/">back</a> and write a new message?');}
}
res.writeHead(200,{'Content-Type':'text/html'});
res.end(page);

}).listen(8888);


console.log('Server has started on 8888.');
