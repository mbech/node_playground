//incorporate node's file-system mananager 
const fs = require('fs');
//have fs monitor the text file and execute callback if it changes
fs.watch('target.txt', function(){
  console.log("target.txt has changed!");
});
console.log("Watching for changes to target.txt...");
