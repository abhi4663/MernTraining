var fs=require('fs');

var reads=fs.readFileSync('write.txt','utf8'); //WRITE
//fs.writeFileSync('write1.txt',reads);     //READ

console.log(reads);
console.log('helloo');