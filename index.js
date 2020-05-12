const request=require("request");
const cheerio=require("cheerio");

request("https://www.mohfw.gov.in/" , (error,response,html) => {
    if(!error && response.statusCode ==200){
        console.log(html);
        
    }
})