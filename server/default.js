import { products } from "./constants/products.js";
import { productsb1 , productsb2 , productsm1 , productsm2, productsm3 , productsn1, productsn2 , productsn3, productss1, productss2 ,productss3, productsw1 ,productsw2 ,productsw3} from "./constants/products.js";
import product from "./model/productSchema.js";

const DefaultData = async() =>{
  try{
     
      await product.insertMany(products);
      console.log('Data imported sucessfully');
  }catch(error){
      console.log('Error: ', error.message);
  }
  try{
   
    await product.insertMany(productsb1);
    console.log('Data imported sucessfully');
}catch(error){
    console.log('Error: ', error.message);
}
try{
   
  await product.insertMany(productsb2);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}
try{
   
  await product.insertMany(productsm1);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}try{
   
  await product.insertMany(productsm2);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}try{
   
  await product.insertMany(productsm3);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}
try{
   
  await product.insertMany(productsn1);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}try{
   
  await product.insertMany(productsn2);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}try{
   
  await product.insertMany(productsn3);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}
try{
   
  await product.insertMany(productss1);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}try{
   
  await product.insertMany(productss2);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}try{
   
  await product.insertMany(productss3);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}
try{
   
  await product.insertMany(productsw1);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}try{
   
  await product.insertMany(productsw2);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}try{
   
  await product.insertMany(productsw3);
  console.log('Data imported sucessfully');
}catch(error){
  console.log('Error: ', error.message);
}
}
export default DefaultData;