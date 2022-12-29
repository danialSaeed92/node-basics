const fs = require('fs');

//reading files
if(fs.existsSync("./docs/blog1.txt"))
fs.readFile('./docs/blog1.txt',(err,data)=>{
if(err){
    console.log(err);
}
console.log(data.toString());
})



//writing files
const text = 'my text that I want to write '
fs.writeFile('./docs/blog1.txt',text,()=>{
    console.log("file was written")
})

// directories
if(!fs.existsSync("./assets")){
fs.mkdir("./assets",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Folder created")
})
}else{
    fs.rmdir("./assets",(err)=>{
      if(err){
        console.log(err)
      }
      console.log("folder deleted")
    })
}


// deleting files

if(fs.existsSync("./docs/blog2.txt")){
  fs.unlink("./docs/blog2.txt",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file deleted")
  })
}