const Penulis = require('./../penulis/model');

const index = async(req, res) => {
    const result = await Penulis.findAll();
    console.log(result)
    res.send({
        status : 'sukses',
        data: result
    })
}

const create = async(req, res) => {
    const {nama_penulis} = req.body;
    
    try {     
        const result = await Penulis.create({
            nama_penulis
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
    const {nama_penulis} = req.body;
    console.log(nama_penulis)
    try {     
        const result = await Penulis.update({
            nama_penulis:nama_penulis
        }, {
            where:{
                id:id
            }
        })
        res.send({
            status:'data berhasil penulis ubah',
            data:result
        })
    } catch (error) {
        console.log('error')
    }
}

const destroy = async(req, res) => {
    const id = req.params.id;
    try {
         await Penulis.destroy({
            where:{
                id:id
            }
        })
        res.send({
            status:'data berhasil di hapus'
        })
    } catch (error) {
        console.log('error')
    }
}

module.exports = {
    index,
    create,
    update,
    destroy
}
