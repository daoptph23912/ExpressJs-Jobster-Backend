require('dotenv').config();
const mockData = require('./mock-data.json');
const Job = require('./models/Job');
const connectDB = require('./db/connect');

const start = async () => {
  try {
    await Job.create(mockData);
    // await connectDB(process.env.MONGO_URI);
    console.log('Success !!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();