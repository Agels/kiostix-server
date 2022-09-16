const {DataTypes} = require('sequelize');
const sequelize = require('../../config/mysql');

const Penulis = sequelize.define('penulis', {
    id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_penulis: {
        type:DataTypes.STRING,
        allowNull:false
    },
   
}, {
    tableName: 'penulis',
    timestamps: false
})

module.exports = Penulis