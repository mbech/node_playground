"use strict";
const fs = require('fs');
//assign spawn to the function 'spawn' from child_process object
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if(!filename){
  throw Error("Error, must specify a file...");
}

fs.watch('target.txt', function(){
  let ls = spawn('ls', ['-lh', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log("Watching " + filename + " for changes...");
