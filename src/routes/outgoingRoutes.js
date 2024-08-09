const express = require('express');
const {
  addRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
} = require('../controllers/outgoingController.js');

const router = express.Router();

router.post('/outgoing/records', addRecord);
router.get('/outgoing/records', getRecords);
router.get('/outgoing/record/:id', getRecordById);
router.put('/outgoing/records/:id', updateRecord);
router.delete('/outgoing/records/:id', deleteRecord);

module.exports = router;
