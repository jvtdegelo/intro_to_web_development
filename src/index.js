import express from "express";
import productRouter from "./routes/products.js"
const PORT = 3000;

const server = express();
server.use(express.json());
server.use("/produtos", productRouter)


server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});