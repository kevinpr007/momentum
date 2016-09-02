const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshiftSchema = new Schema({
    startDate: Date,
    endDate: Date,
    createdBy: ObjectId,
    createdOn: Date,
    days: [String],
    userId: ObjectId
}, {collection: 'sp_workshift'});

exports.workshiftSchema = workshiftSchema;