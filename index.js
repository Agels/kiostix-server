const express = require('express');
const app = express()
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));

const port = 3000;
app.use(express.urlencoded({ extended: true }));

const BukuController = require('./app/buku/route');
const PenulisController = require('./app/penulis/route');
const KategoriController = require('./app/kategori/route');

app.use(cors());
app.use(express.json());

app.use('/api', BukuController);
app.use('/api', PenulisController);
app.use('/api', KategoriController);
app.get('/',(req, res )=> {
    res.send('success')
})

app.listen(port, () => console.log(`server running at :http://localhost:${port}`) );