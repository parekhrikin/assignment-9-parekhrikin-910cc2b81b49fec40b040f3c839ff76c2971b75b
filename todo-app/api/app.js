import express from 'express';
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

// Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB. mongoose.
mongoose.connect('mongodb://localhost:27017/tododb');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

routes(app);

export default app;