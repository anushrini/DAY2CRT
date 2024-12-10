//creating fs
let fs=require("fs");
console.log("hello");
let readsync=fs.readFilesync("./abc.txt","utf-8");
console.log(readsync);
console.log("World");



// creating ARROW FUNCTIONS
    let d=() => 78
    let g=d()
    console.log(g);


    let d=(a,b) => a+b;
    let g=d(10,20);
    console.log(g);
// READFILE
    let fs=require("fs");
    console.log("hello");
    let readsync=
         fs.readFile("./abc.txt","utf-8",(err,data)=>console.log(data)
        );
        console.log(readsync);
        console.log("world");
