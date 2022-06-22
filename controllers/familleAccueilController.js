const db = require ('../Models')

//creation
const Familleaccueil = db.FamilleAccueil


//1. add famille accueil

const addFamilleAccueil = async (req,res) => {

    let info = {

      Nom:req.body.Nom,
      Adresse:req.body.Adresse,
      Cp:req.body.Cp,
      Ville:req.body.Ville,
      EquipementsFourni:req.body.EquipementsFourni,
      Artichats:req.body.Artichats,
      Notes:req.body.Notes

      
    }
    console.log(req.body.data)
    console.log(info)
    const fa = await Familleaccueil.create(info)
    res.status(200).send(fa)
    console.log(fa)
}


//2.get all famille accueil

const getallFamilleaccueils = async (req,res) => {
    let fa = await FamilleAccueil.findAll({})
    console.log(fa)
    res.status(200).send(fa)
}



module.exports = {
    addFamilleAccueil,
    getallFamilleaccueils,

}