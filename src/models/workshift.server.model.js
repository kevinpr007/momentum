const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshiftSchema = new Schema({
    startDate: Date,
    endDate: Date,
    createdBy: Schema.ObjectId,
    createdOn: {type: Date, default: Date.now},
    days: [String],
    userId: Schema.ObjectId
}, {collection: 'sp_workshift'});

mongoose.model('WorkShifts', workshiftSchema);