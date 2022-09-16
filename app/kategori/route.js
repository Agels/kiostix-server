const router = require('express').Router();
const routerCOntroller = require('./controller');

router.get('/kategori', routerCOntroller.index);
router.post('/kategori', routerCOntroller.create);
router.put('/kategori/:id', routerCOntroller.update);
router.delete('/kategori/:id', routerCOntroller.destroy);

module.exports = router