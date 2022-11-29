const express = require('express');
const router = express.Router();

// import from the controller to get our index function
const skillCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/new', skillCtrl.new); // Lab2
router.get('/:id', skillCtrl.show);
router.post('/', skillCtrl.create); // Lab 2
router.get('/:id/edit', skillCtrl.edit) // bonus lab 2
router.put('/:id/edit', skillCtrl.updateSkill) // bonus lab 2
router.delete('/:id', skillCtrl.delete); //lab 2


module.exports = router;
