const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback)=>{
  MongoClient.connect(
    "mongodb+srv://user1:mongouser1@cluster0.goaussj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client)=>{
      console.log('connected to mongodb')
      callback(client)
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = mongoConnect;