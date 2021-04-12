var fs=require('fs');

//callback function WRITE
fs.readFile('write.txt','utf8', function(err,data){
   console.log(data);
   fs.writeFile('write2.txt', data,function(err,result){
        if(err)
        console.log('eroor',err);
    });
  //  console.log('data');
});
console.log('reads');


//READ
// fs.readFile('write.txt','utf8', function(err,data){
//     console.log(data);
// })
// console.log('helloo');