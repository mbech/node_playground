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
  let output = '';

  ls.stdout.on('data', function(chunk){
    output += chunk.toString(); 
  })

  ls.stdout.on('close', function(chunk){
    let parts = output.split(/\s+/); 
    console.dir([parts[0], parts[4], parts[8]]);
  })
});

console.log("Watching " + filename + " for changes...");

