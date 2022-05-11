import express from "express";
import productRouter from "./routes/products.js"
import mongoose from "mongoose";

const PORT = 3000;

// const server = express();
// server.use(express.json());
// server.use("/produtos", productRouter)


// server.listen(PORT, ()=>{
//     console.log(`listening on ${PORT}`);
// });

mongoose.connect("mongodb://localhost:27017/aula_db")
    .then(() => console.log("Conectado"));


const productModel = mongoose.model("Product");

const meuProduto = new productModel();
meuProduto.name = "shampoo";
meuProducto.save()
    .then(()=>)