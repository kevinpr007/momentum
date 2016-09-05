const mongoose = require('mongoose');
const days = require('./days.server.enum');
const Schema = mongoose.Schema;

const workshiftSchema = new Schema({
    startDate: Date,
    endDate: Date,
    createdBy: Schema.ObjectId,
    createdOn: {type: Date, default: Date.now},
    days: {type: String, enum: days()},
    userId: Schema.ObjectId
}, {collection: 'sp_workshift'});

exports.workshiftSchema = workshiftSchema;