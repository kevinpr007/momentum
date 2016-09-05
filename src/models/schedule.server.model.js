const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const types = require('./schedule-types.server.enum')();

const scheduleSchema = new Schema({
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    scheduleType: {type: String, enum: types},
    service: {type: Schema.ObjectId, ref: 'Service', required: true},
    workshift: {type: Schema.ObjectId, ref: 'Workshift', required: true},
    createdBy: {type: Schema.ObjectId, ref: 'User', required: true},
    createdOn: {type: Date, default: Date.now}
}, {collection: 'sp_schedule'});

scheduleSchema.set('toJSON', {getters: true, virtuals: true});
mongoose.model('Schedule', scheduleSchema);