const {DataTypes} = require('sequelize');
const sequelize = require('../../config/mysql');
const Penulis = require('./../penulis/model');
const kategori = require('./../kategori/model');
const Buku = sequelize.define('buku', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_buku: {
        type:DataTypes.STRING,
        allowNull:false
    },
    id_kategori: {
        type:DataTypes.INTEGER,
        allowNull:true
    },
    id_penulis: {
        type:DataTypes.STRING,
        allowNull:true
    },
}, {
    tableName: 'buku',
    timestamps: false
 })

// Buku.hasOne(Penulis, {foreignKey: 'id_penulis'});
Buku.belongsTo(Penulis, {foreignKey: 'id_penulis'});
Buku.belongsTo(kategori, {foreignKey: 'id_kategori'});

module.exports = Buku