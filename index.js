const request=require("request");
const cheerio=require("cheerio");
const express=require("express");
const bodyParser=require("body-parser");
const fs = require("fs");

var port=3000;
const app=express();
app.set("view engine","ejs");       

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var total=0;
var active=0;
var cured=0;
var death=0;
var daataa=[0];
request("https://www.mohfw.gov.in/" , (error,response,html) => {
    if(!error && response.statusCode ==200){
        const $=cheerio.load(html);
         total=$('#state-data > div > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(2) > strong').text();
        active=$('#site-dashboard > div > div > div > div > ul > li.bg-blue > strong').text();
         cured=$('#site-dashboard > div > div > div > div > ul > li.bg-green > strong').text();
        death=$('#site-dashboard > div > div > div > div > ul > li.bg-green > strong').text();
        for(var i=1;i<34;i++){
            daataa.push($("#state-data > div > div > div > div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(3)").text());
            daataa.push($("#state-data > div > div > div > div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(3)").next().text());
            daataa.push($("#state-data > div > div > div > div > table > tbody > tr:nth-child(" + i + ") > td:nth-child(3)").next().next().text());
        }
        
        console.log(daataa);
        console.log(daataa.length);
        
    }
})
    //document.querySelector("#state-data > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(3)")
// document.querySelector("#state-data > div > div > div > div > table > tbody > tr:nth-child(33) > td:nth-child(3)")

app.get("/",function(req,res){
   
    res.render('index',{total:total , active:active , cured:cured , death:death});
    });

app.post("/",function(req,res){
     var c = req.body.statename;
     var cc=c.toLowerCase();
     
     

})

app.listen(port,function(){
    console.log("server is set up");
})        
