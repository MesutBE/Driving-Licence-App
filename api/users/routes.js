const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();


router.get('/', controllers.getUsers);
router.get('/:id', controllers.getOne);
router.post('/login', controllers.login);
router.post('/', controllers.create);
router.put('/:id', controllers.update);
router.delete('/:id', controllers.delete);



module.exports = router;
