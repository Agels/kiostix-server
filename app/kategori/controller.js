const Kategori = require('./model');

const index = async(req, res) => {
    try {
        const result = await Kategori.findAll();
        res.send({
            status:'sukses',
            data:result
        })
    } catch (error) {
        console.log('error')        
    }
}

const create = async(req, res) => {
    const {nama_kategori} = req.body;
    
    try {     
        const result = await Kategori.create({
            nama_kategori
        })
        res.send({
            status:'success',
            data:result
        })
    } catch (error) {
        console.log('error')
    }
}

const update = async(req, res) => {
    const id = req.params.id;
    const {nama_kategori} = req.body;
    try {     
        const result = await Kategori.update({
            nama_kategori:nama_kategori
        }, {
            where:{
                id:id
            }
        })
        res.send({
            status:'data berhasil kategori ubah',
            data:result
        })
    } catch (error) {
        console.log('error')
    }
}

const destroy = async(req, res) => {
    const id = req.params.id;
    try {
       await Kategori.destroy({
            where : {
                id:id
            }
        })
        res.send({
            status:'data kategori berhasil di hapus'
        })
    } catch (error) {
        res.send({
            status:'error'
        })
    }
    
}


module.exports = {
    index,
    create,
    update,
    destroy
}