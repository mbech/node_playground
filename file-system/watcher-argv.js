const 
fs = require('fs');
filename = process.argv[2];

if(!filename){
  throw Error("Error, must specify a file...");
}

fs.watch('target.txt', function(){
  console.log(filename + " just changed!");
});

console.log("Watching " + filename + " for changes...");

