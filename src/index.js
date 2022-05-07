import express from "express";

const server = express();

server.get("/", (request, response)=>{
    console.log("Hello my friend");
    response.send("<h1>Hello nooob<\h1>");
});

server.listen(3000, ()=>{
    console.log("ok");
});