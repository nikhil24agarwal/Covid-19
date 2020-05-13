const request=require("request");
const cheerio=require("cheerio");
const express=require("express");
const bodyParser=require("body-parser");
const fs = require("fs");


const app=express();
app.use(bodyParser.urlencoded({extended:true}));
var h11=0;
var h12=0;
var h13=0;

request("https://www.mohfw.gov.in/" , (error,response,html) => {
    if(!error && response.statusCode ==200){
        const $=cheerio.load(html);
        var a=$('tbody > tr:nth-child(1) > td:nth-child(3)').text();
        var b=$('tbody > tr:nth-child(1) > td:nth-child(3)').next().text();
        var c=$('tbody > tr:nth-child(1) > td:nth-child(3)').next().text();
        h11=a;
        h12=b;
        h13=c;
        console.log(a);
    }
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/" , function(req,res){
    res.redirect("/final");
})

app.get("/final",function(req,res){
    // $ = cheerio.load(__dirname + "/final.html");
    // console.log($('body > h1').innerHTML);
     fs.readFile("./final.html",null,function(error,data){
         if(error){
             res.write("error")

         }
         else{
             console.log(data);
             

             
         }
     })
    
    // res.sendFile(__dirname + "/final.html");
})




app.listen(3000,function(){
    console.log("server is set up");
})        
