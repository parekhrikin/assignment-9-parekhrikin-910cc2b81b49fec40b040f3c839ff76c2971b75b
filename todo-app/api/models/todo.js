import mongoose from 'mongoose';

// A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    desc: {
        type: String,
        required: 'Description is required'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastModifiedDate: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

Schema.virtual('id', () => this._id.toHexString());
Schema.set('toJSON', { virtuals: true });

const model = mongoose.model('todo', Schema);

export default model;