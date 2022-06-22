const dbConfig = require('../config/db.config');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModels')(sequelize, DataTypes)
db.AnimalIn = require('./animalInModel')(sequelize,DataTypes)
db.AnimalOut = require('./animalOutModel')(sequelize,DataTypes)
db.Adoptant = require('./adoptanModel')(sequelize,DataTypes)
db.Equipement = require('./equipementModel')(sequelize,DataTypes)
db.FamilleAccueil = require('./familleAccueilModel')(sequelize,DataTypes)
db.Sponsor = require ('./sponsorModel')(sequelize,DataTypes)
db.User = require('./userModel')(sequelize,DataTypes)
db.Veterinaire = require('./veterinaireModel')(sequelize,DataTypes)






// 1 to Many Relation

db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'review'
});

db.reviews.belongsTo(db.products, {
    foreignKey: 'product_id',
    as: 'product'
});

db.AnimalIn.belongsToMany(db.FamilleAccueil,{through:'AnimalInFA'});
db.FamilleAccueil.belongsToMany(db.AnimalIn,{through:'AnimalInFA'});

db.AnimalIn.belongsToMany(db.Veterinaire, {through:'AnimalInVeto'});
db.Veterinaire.belongsToMany(db.AnimalIn, {through:'AnimalInVeto'});

db.AnimalOut.belongsToMany(db.FamilleAccueil,{through:'AnimalOutFA'});
db.FamilleAccueil.belongsToMany(db.AnimalOut,{through:'AnimalOutFA'});

db.AnimalOut.belongsToMany(db.Veterinaire, {through:'AnimalOutVeto'});
db.Veterinaire.belongsToMany(db.AnimalOut, {through:'AnimalOutVeto'});

//relations equipement famille accueil et sponsor equipement

db.Equipement.belongsToMany(db.FamilleAccueil,{through:'equipementFA'});
db.FamilleAccueil.belongsToMany(db.Equipement,{through:'equipementFA'});

db.Sponsor.belongsToMany(db.Equipement,{through:'EquipSponsor'});
db.Equipement.belongsToMany(db.Sponsor,{through:'EquipSponsor'});

//relation one to many

//db.AnimalOut.belongsTo(db.Adoptant);
db.Adoptant.hasMany(db.AnimalOut);

//relation one to one

db.User.hasOne(db.FamilleAccueil)
db.FamilleAccueil.belongsTo(db.User)


// db.sequelize.sync({ force: false }).then(() => {console.log(`resync done`)})


module.exports = db
