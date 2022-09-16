const {Sequelize} = require('sequelize');
// const Buku = require('../app/buku/model');
// const Penulis  = require('../app/penulis/model');
const sequelize = new Sequelize({
    database:"db_tes_kiostix",
    host:"localhost",
    username:"root",
    password:"",
    dialect:"mysql"
});



(async () => {
    try {
        await sequelize.authenticate();
        console.log('connection success')
    } catch(err){
        console.log('connection error',err)
    }
})();

// Buku.associate = (models) => {
//     Buku.hasMany(models.Buku, {
//       foreignKey: 'id_penulis',
//       targetKey: 'differentUniqueAttribute'
//     })
//   }

// Penulis.associate = (models) => {
//     Penulis.hasMany(models.Penulis, {
//       foreignKey: 'id_penulis',
//       sourceKey: 'differentUniqueAttribute'
//  });
// }

module.exports = sequelize;