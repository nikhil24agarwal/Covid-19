const request=require("request");
const cheerio=require("cheerio");
const express=require("express");

const app=express();
var h=0;

request("https://www.mohfw.gov.in/" , (error,response,html) => {
    if(!error && response.statusCode ==200){
        const $=cheerio.load(html);
        var a=$('tbody > tr:nth-child(1) > td:nth-child(3)').text();
        h=a;
        console.log(a);
        
        
    }
})

app.use("/",function(req,res){
    res.send(h);
})



app.listen(3000,function(){
    console.log("server is set up");
    
})