import mongoose from 'mongoose';



const Connection= async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ecommerceweb-shard-00-00.byr82.mongodb.net:27017,ecommerceweb-shard-00-01.byr82.mongodb.net:27017,ecommerceweb-shard-00-02.byr82.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-ogdzuu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
      await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false});
      console.log('Database connected sucessfully');

  } catch(error){
      console.log('Error: ', error.message);
    
  }
}
export default Connection;

