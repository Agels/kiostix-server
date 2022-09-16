const {DataTypes} = require('sequelize');
const sequelize = require('../../config/mysql');

const kategori = sequelize.define('kategori', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_kategori: {
        type:DataTypes.STRING,
        allowNull:false
    },
   
}, {
    tableName: 'kategori',
    timestamps: false
})

module.exports = kategori