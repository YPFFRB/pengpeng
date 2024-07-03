const fs=require('fs');

//   const fileContent=   fs.readFileSync('./text.txt','utf-8')
// console.log(fileContent);

fs.writeFileSync('./readme.md','hello world')
console.log(fs.statSync('./text.txt'));