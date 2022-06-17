const db = require('../Models')

const Veterinaire = db.Veterinaire

//1. addVeto

const addVeterinaire = async (req,res) => {

    let info = {
        Nom:req.body.Nom,
        Adresse:req.body.Adresse,
        Ville:req.body.Ville,
        CP:req.body.CP,
        DateIntervention:req.body.DateIntervention,
        Prix:req.body.Prix,
        TypeIntervention:req.body.TypeIntervention,
        Artichats:req.body.Artichats,
        Notes:req.body.Notes,
    }
    console.log(info)
    const veterinaire = await Veterinaire.create(info)
    res.status(200).send(veterinaire)
    console.log(veterinaire);
}

const getAllVeterinaires = async (req,res) => {
    let veterinaires = await Veterinaire.findAll({})
    console.log(veterinaires);
    res.status(200).send(veterinaires)
}

module.exports = {
    addVeterinaire,
    getAllVeterinaires,
}