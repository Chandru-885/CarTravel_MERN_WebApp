const mongoose = require('mongoose');

const connectToDatabase = async()=>{
     let connection = await mongoose.connect(process.env.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log(`Connected to the database host`.green.bold);
}

module.exports = connectToDatabase;