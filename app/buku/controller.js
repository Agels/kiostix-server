const Buku = require('./model');
const Penulis = require('./../penulis/model');
const Kategori = require('./../kategori/model');



const index = async(req, res) => {
    const {id_penulis, id_kategori} = req.query;
    let condition;
    if(id_penulis){
        condition = id_penulis ? { id_penulis: id_penulis } : null;
    } else if(id_kategori){
        condition = id_kategori ? { id_kategori: id_kategori } : null;
    } 
    
    const result = await Buku.findAll({
        include: 
       
        [{ model: Penulis }, {model: Kategori }],
        where: condition 
            // where: {
            //     id_penulis:id_penulis,
            //     // id_kategori:id_kategori
            // },        
    });
    res.send({
        status : 'sukses',
        data: result
    })
}

const detail = async(req, res) => {
    const {id_penulis, id_kategori} = req.query;
    const result = await Buku.findAll({
        include: 
            [{ model: Penulis }, {model: Kategori }],
           
    });

    res.send({
        status : 'sukses',
        data: result
    })
}

const create = async(req, res) => {
    const {nama_buku, id_penulis, id_kategori} = req.body;
    try {
        await Buku.sync()
        const result = await Buku.create({nama_buku,id_penulis,id_kategori})
        res.send({
            status:'data berhasil di tambah',
            data:result
        })
    } catch (error) {
        console.log('error')
    }
}

const update = async(req, res)=> {
    const {nama_buku, id_penulis, id_kategori} = req.body;
    const id = req.params.id

    try {
        const result = await Buku.update({
            nama_buku:nama_buku,
            id_penulis:id_penulis,
            id_kategori:id_kategori
        },{
            where :{
                id:id
            }
        })
        res.send({
            status:'data berhasil di update',
            data:result
        })
    } catch (error) {
        
    }
}

const destroy = async(req, res) => {
    const id = req.params.id;
    try {
         await Buku.destroy({
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
    detail,
    create,
    update,
    destroy
}