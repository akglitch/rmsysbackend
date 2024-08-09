const mongoose = require('mongoose');
const { Schema } = mongoose;

const outgoingSchema = new Schema({
    year: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    serial_no: {
        type: String,
        required: true,
    },
    date_received: {
        type: String,
        required: true,
    },
    date_dispatched: {
        type: String,
        required: true,
    },
    reference_no: {
        type: String,
        required: true,
    },
    folio_no: {
        type: String,
        required: true,
    },
    addressee: {
        type: String,
        required: true,
    },
    mode_of_dispatch: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    }
}, {
    timestamps: false,
});

const OutgoingRecord = mongoose.model('OutgoingRecord', outgoingSchema);
module.exports = OutgoingRecord;
