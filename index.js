const request=require("request");
const cheerio=require("cheerio");
const express=require("express");
const bodyParser=require("body-parser");
const fs = require("fs");  // not used

var port=3000;
const app=express();
app.use(express.static("public"));
app.set("view engine","ejs");       

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var total=0;
var active=0;
var cured=0;
var death=0;
var daataa=[0];
var state="";
var stotal=0;
var scured=0;
var sdeaths=0;




request("https://www.mohfw.gov.in/" , (error,response,html) => {
    if(!error && response.statusCode ==200){
        const $=cheerio.load(html);
         total=$('#state-data > div > div > div > div > table > tbody > tr:nth-child(35) > td:nth-child(2) > strong').text();
        active=$('#site-dashboard > div > div > div > div > ul > li.bg-blue > strong').text();
         cured=$('#site-dashboard > div > div > div > div > ul > li.bg-green > strong').text();
        death=$('#site-dashboard > div > div > div > div > ul > li.bg-red > strong').text();
        console.log(death);
        
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

     cc=c.toLowerCase();
     switch(cc){
         case "andaman and nicobar islands":
             stotal=daataa[1];
             scured=daataa[2];
             sdeaths=daataa[3];
             break;
        case "andhra pradesh":
            stotal=daataa[4];
            scured=daataa[5];
            sdeaths=daataa[6];
            break;
        case "arunachal pradesh":
            stotal=daataa[7];
            scured=daataa[8];
            sdeaths=daataa[9];
            break;
        case "assam":
            stotal=daataa[10];
            scured=daataa[11];
            sdeaths=daataa[12];
            break;        
        case "bihar":
            stotal=daataa[13];
            scured=daataa[14];
            sdeaths=daataa[15];
            break;        
        case "chandigarh":
            stotal=daataa[16];
            scured=daataa[17];
            sdeaths=daataa[18];
            break;        
        case "chhattisgarh":
            stotal=daataa[19];
            scured=daataa[20];
            sdeaths=daataa[21];
            break;       
         case "dadar nagar haveli":
            stotal=daataa[22];
            scured=daataa[23];
            sdeaths=daataa[24];
            break;        
        case "delhi":
            stotal=daataa[25];
            scured=daataa[26];
            sdeaths=daataa[27];
            break;        
        case "goa":
            stotal=daataa[28];
            scured=daataa[29];
            sdeaths=daataa[30];
            break;        
        case "gujarat":
            stotal=daataa[31];
            scured=daataa[32];
            sdeaths=daataa[33];
            break;
        case "haryana":
                stotal=daataa[34];
                scured=daataa[35];
                sdeaths=daataa[36];
                break;
           case "himachal pradesh":
               stotal=daataa[37];
               scured=daataa[38];
               sdeaths=daataa[39];
               break;
           case "jammu and kashmir":
               stotal=daataa[40];
               scured=daataa[41];
               sdeaths=daataa[42];
               break;
           case "Jharkhand":
               stotal=daataa[43];
               scured=daataa[44];
               sdeaths=daataa[45];
               break;        
           case "karnataka":
               stotal=daataa[46];
               scured=daataa[47];
               sdeaths=daataa[48];
               break;        
           case "kerala":
               stotal=daataa[49];
               scured=daataa[50];
               sdeaths=daataa[51];
               break;        
           case "ladakh":
               stotal=daataa[52];
               scured=daataa[53];
               sdeaths=daataa[54];
               break;       
            case "madhya pradesh":
               stotal=daataa[55];
               scured=daataa[56];
               sdeaths=daataa[57];
               break;        
           case "maharashtra":
               stotal=daataa[58];
               scured=daataa[59];
               sdeaths=daataa[60];
               break;        
           case "manipur":
               stotal=daataa[61];
               scured=daataa[62];
               sdeaths=daataa[63];
               break;        
           case "meghalaya":
               stotal=daataa[64];
               scured=daataa[65];
               sdeaths=daataa[66];
               break;        
            case "mizoram":
                stotal=daataa[67];
                scured=daataa[68];
                sdeaths=daataa[69];
                break;
           case "odisha":
               stotal=daataa[70];
               scured=daataa[71];
               sdeaths=daataa[72];
               break;
           case "puducherry":
               stotal=daataa[73];
               scured=daataa[74];
               sdeaths=daataa[75];
               break;
           case "punjab":
               stotal=daataa[76];
               scured=daataa[77];
               sdeaths=daataa[78];
               break;        
           case "rajasthan":
               stotal=daataa[79];
               scured=daataa[80];
               sdeaths=daataa[81];
               break;        
           case "tamil nadu":
               stotal=daataa[82];
               scured=daataa[83];
               sdeaths=daataa[84];
               break;        
           case "telengana":
               stotal=daataa[85];
               scured=daataa[86];
               sdeaths=daataa[87];
               break;       
            case "tripura":
               stotal=daataa[88];
               scured=daataa[89];
               sdeaths=daataa[90];
               break;        
           case "uttarakhand":
               stotal=daataa[91];
               scured=daataa[92];
               sdeaths=daataa[93];
               break;        
           case "uttar pradesh":
               stotal=daataa[94];
               scured=daataa[95];
               sdeaths=daataa[96];
               break;        
           case "west bengal":
               stotal=daataa[97];
               scured=daataa[98];
               sdeaths=daataa[99];
               break;    
                }
     res.redirect("/final")
})
app.get("/final",function(req,res){
    
    
     res.render('final' , {stotal:stotal,scured:scured,sdeaths:sdeaths})
   
});

app.listen(port,function(){
    console.log("server is set up");
})        
