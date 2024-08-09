const mongoose = require('mongoose');

const { Schema } = mongoose;

const incomingSchema = new Schema({
  year: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  date_received: {
    type: Date,
    required: true,
  },
  log_time: {
    type: String,
    required: true,
  },
  serial_no: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
  },
  from_whom_received: {
    type: String,
    required: true,
  },
  date_of_letter: {
    type: Date,
    required: true,
  },
  letter_ref_no: {
    type: String,
    required: true,
  },
  received_by: {
    type: String,
    required: true,
  },
  type_of_letter: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
}, {
  timestamps: false, // Disable timestamps
});

const IncomingRecord = mongoose.model('IncomingRecord', incomingSchema);

module.exports = IncomingRecord;
