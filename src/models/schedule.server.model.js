const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    startDate: Date,
    endDate: Date,
    workshiftId: Schema.ObjectId
}, {collection: 'sp_schedule'});

mongoose.model('Schedules', scheduleSchema);