  var fs=require('fs');

  var read=fs.createReadStream("./data.txt");
  var write=fs.createWriteStream("./write.txt");
  // read.on('data',function(chunk){
  //   console.log('Recieved');
  // // write.write(chunk);
  // var chunk1=chunk.toString();
  //     console.log(chunk1);
  // })
  
  read.pipe(write);

  