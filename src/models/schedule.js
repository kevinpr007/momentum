const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshiftSchema = new Schema({
    startDate: Date,
    endDate: Date,
    workshiftId: ObjectId
}, {collection: 'sp_workshift'});

exports.workshiftSchema = workshiftSchema;