const express = require('express');
const {
  addRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
  generateReport
} = require('../controllers/incomingController');

const router = express.Router();

router.post('/incoming/records', addRecord);
router.get('/incoming/records', getRecords);
router.get('/incoming/record/:id', getRecordById);
router.put('/incoming/records/:id', updateRecord);
router.delete('/incoming/records/:id', deleteRecord);
router.get('/incoming/records/report', generateReport);

module.exports = router;
