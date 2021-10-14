import mongoose from "mongoose";
import dotenv from "dotenv";
// DATA
import stores from "./data/store";

// MODELS
import Store from "./model/store";
import Product from "./model/products";

import connectDB from "./config/db";

dotenv.config();

connectDB();

const importDataToDb = async () => {
  try {

    await Store.deleteMany();
    await Product.deleteMany();

     await Store.insertMany(stores);


    console.log(stores)
    

    console.log(`Data imported To db`);
    process.exit();
  } catch (error) {
    console.log(`Error is coming from Importing the data to the db `);
    process.exit(1);
  }
};

const destroyDataFromDb = async () => {
  try {

    await Store.deleteMany();
    await Product.deleteMany();

    console.log("Data destroy from db".blue.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error is coming from Destroing the data to the db `);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyDataFromDb();
} else {
  importDataToDb();
}

// const createdUser = await User.insertMany(users)
// const admin = createdUser[0]._id;
// const sampleProducts = products.map(product =>{
//     return{...product, user: admin}
// })
// await Product.insertMany(sampleProducts);
