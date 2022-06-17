const db = require ('../Models')

//creation
const FamilleAccueil = db.FamilleAccueil


//1. add famille accueil

const addFamilleAccueil = async (req,res) => {

    let info = {

        Nom: req.body.Nom,
        Adresse: req.body.Adresse,
        Cp:req.body.Cp,
        Ville: req.body.Ville,
        EquipementsFourni:req.body.EquipementsFourni,
        Artichats:req.body.Artichats,
        Notes:req.body.Notes,

    }
    console.log(info)
    const familleaccueil = await FamilleAccueil.create(info)
    res.status(200).send(familleaccueil)
    console.log(familleaccueil)
}


//2.get all famille accueil

const getallFamilleaccueils = async (req,res) => {
    let familleAccueils = await FamilleAccueil.findAll({})
    console.log(familleAccueils)
    res.status(200).send(familleAccueils)
}



module.exports = {
    addFamilleAccueil,
    getallFamilleaccueils,

}