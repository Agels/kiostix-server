const router = require('express').Router();
const penulisController = require('./controller');

router.get('/penulis', penulisController.index);
router.post('/penulis', penulisController.create);
router.put('/penulis/:id', penulisController.update);
router.delete('/penulis/:id', penulisController.destroy);


module.exports = router
