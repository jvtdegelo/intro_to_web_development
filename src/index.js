import express from "express";
import productRouter from "./routes/products.js"
import mongoose from "mongoose";

const PORT = 3000;

const server = express();
server.use(express.json());
//server.use("/produtos", productRouter)


server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/aula_db")
    .then(() => console.log("Conectado"));


const ProductSchema = new mongoose.Schema({
    "name":String
});

const productModel = mongoose.model("Product", ProductSchema);

const meuProduto = new productModel();
// meuProduto.name = "shampoo";
// meuProduto.save()
//   .then(() => console.log("Salvo"))
//   .catch((e) => console.error(e));


// productModel
//     .find()
//     .then((objs) => console.log(objs))
//     .catch((error) => console.error(error));
    server.get('/produtos/:name', (request, response) => {
        productModel
        .find({"name":request.params.name})
        .then((objs) => console.log(objs))
        .catch((error) => console.error(error));
    
        response
          .status(201)
          .json(request.body);
      });


