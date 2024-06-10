var express=require("express"); 
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
})




server.get('/',function(req,res){ 
res.set({ 
	'Access-control-Allow-Origin':'*'
	}); 
return res.redirect('Blog website.html'); 
}).listen(3000) 