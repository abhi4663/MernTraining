var fs=require('fs');

var request=require('request');

request.get('http://www.google.com',function(error,response,body){
    if(error){
        console.log(error);
        return;
    }
    console.log(body);
    fs.writeFile('Content.txt',body,()=>{
        console.log(`looged "Content"`);
    })
})