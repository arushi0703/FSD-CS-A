import { on } from 'events';
import http from 'http';
import os from 'os';
const port=4001;
const server = http.createServer((req, res) =>{
    const url=req.url;
    if(url==='/' && req.method==='GET'){
        res.write("<h1>Home Page</h1>");
    }
    else if(url==='/about' && req.method==='GET'){
        res.write("<h1>About Page</h1>");
    }
    else if(url==='/contact' && req.method==='GET'){
        res.write("<h1>Contact Page</h1>");
    }
    else if(url==='/system' && req.method==='GET'){
        res.write("<h1>System Information</h1>");
    }
    else if (url==='/senddata' && req.method==='POST'){
        const body="";
        req.on('data',(chunk)=>{
            body=body+chunk;
        })
        req.on('end',()=>{
        res.statusCode=201;
        res.write(body + "<h1>View Data</h1>")
        });
    }
    else if (url==='/viewdata' && req.method==='GET'){
        res.write("<h1>View Data</h1>");
    }
    else{
        res.statusCode=404;
        res.write("<h1>Page Not Found</h1>");
    }
    res.end();
})

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})