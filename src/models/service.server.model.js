const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: {type: String, index: 1, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    time: {type: Number, required: true},
    user: {type: Schema.ObjectId, ref: 'User', required: true},
    createdBy: {type: Schema.ObjectId, ref: 'User', required: true},
    createdOn: {type: Date, default: Date.now}
}, {collection: 'sp_service'});

serviceSchema.set('toJSON', {getters: true, virtuals: true});
mongoose.model('Service', serviceSchema);
