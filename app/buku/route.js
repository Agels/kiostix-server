const router = require('express').Router();
const BukuController = require('./controller');

router.get('/buku', BukuController.index);
router.get('/buku', BukuController.detail);
router.post('/buku', BukuController.create);
router.put('/buku/:id', BukuController.update);
router.delete('/buku/:id', BukuController.destroy);

module.exports = router