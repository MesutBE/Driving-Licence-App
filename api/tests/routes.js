const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.get);
router.get('/testtypes', controllers.getTypes);
router.get('/filenames', controllers.getFileNames) // http://localhost:5000/api/tests/filenames
router.get('/test/freetest', controllers.getFreeTest);
router.get('/:testName', controllers.getTest);
router.get('/:testName/:situation', controllers.getSituation);
router.get('/question/:testName/:situation', controllers.getQuestion);
router.post('/result/:testName', controllers.getAnswer);


module.exports = router;