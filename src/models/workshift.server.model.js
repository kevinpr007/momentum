const mongoose = require('mongoose');
const days = require('./days.server.enum')();
const Schema = mongoose.Schema;

const workshiftSchema = new Schema({
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    days: {type: String, enum: days, required: true},
    user: {type: Schema.ObjectId, ref: 'User', required: true},
    createdBy: {type: Schema.ObjectId, ref: 'User', required: true},
    createdOn: {type: Date, default: Date.now}
}, {collection: 'sp_workshift'});

workshiftSchema.set('toJSON', {getters: true, virtuals: true});
mongoose.model('Workshift', workshiftSchema);