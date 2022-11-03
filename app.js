const fs = require("fs");
const moduledata = require("./modules")
const http = require("http")

// Window is not supported in backend, global is provided
console.log(global); 

global.setTimeout(()=>{
    console.log("Timed Out")
},3000);

// Reading file asynchronously
fs.readFile(`${__dirname}/text.txt`,"utf8", (err,fileData)=>{
    console.log(fileData);
});

// Reading file synchronously
const readData = fs.readFileSync(`${__dirname}/text.txt`, "utf8");
console.log(readData);

console.log(moduledata)
console.log(moduledata.hello());
console.log(moduledata.obj);
console.log(moduledata.key);
console.log(moduledata.pin);

const server = http.createServer((req,res)=>{
    const userdata =[
        {
            name: "XXX",
            age: 20
        },
        {
            name: "XXX",
            age: 20
        }
    ]

    const courseData =[
        {
            name: "React",
            Duration: 3
        },
        {
            name: "Node",
            Duration: 6
        }
    ]
    if(req.url === "/users"){
        // Send users response
        res.write(JSON.stringify(userdata));
    }else if(req.url === "/courses"){
        // Send courses data
        res.write(JSON.stringify(courseData));
    } else{
        // No data found
        res.write("No data found")
    }
    res.end();
});
server.listen(3000);
