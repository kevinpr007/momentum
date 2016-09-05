const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    name: {type: String, index: 1, required: true},
    description: {type: String},
    urlLocation: {type: String},
    createdBy: {type: Schema.ObjectId, ref: 'User', required: true},
    createdOn: {type: Date, default: Date.now}
}, {collection: 'sp_location'});

locationSchema.set('toJSON', {getters: true, virtuals: true});
mongoose.model('Location', locationSchema);
