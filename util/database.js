const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback)=>{

  MongoClient.connect(
    "mongodb+srv://user1:mongouser1@cluster0.goaussj.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client)=>{
      console.log('connected to mongodb')
      _db = client.db();
      callback(_db);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No db found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;