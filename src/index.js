import express from "express";

const PORT = 3000;

const server = express();

server.get("/", (request, response)=>{
    const meuObj = {
        status: "ok",
        data: {
            username:"john",
            age:"20"
        }
    }
    response.json(meuObj);
});

server.post("/echo", (req, res)=>{
    console.log(req.body)
    res.send("ok")
});

server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});