const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
main().then(() => {
    console.log("database connected successfully");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner :'694bde1c99d6899996c6cb63'}));
   await Listing.insertMany(initData.data);
   console.log("data was saved");
}

initDB();