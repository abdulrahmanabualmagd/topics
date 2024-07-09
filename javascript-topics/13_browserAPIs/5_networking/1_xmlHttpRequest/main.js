import { createData, getData, updateData, deleteData } from "./xhr.js";

const productsUrl =
  "https://testing-e2f37-default-rtdb.firebaseio.com/products.json";

// returns a prmoise we have to wait until it resolve or reject by using await or .then().catch()
const products = await getData(productsUrl);
    console.log(products)

getData(productsUrl)
  .then((res) => console.log(res))
  .catch((rej) => console.log("ErrorHappened", rej));
