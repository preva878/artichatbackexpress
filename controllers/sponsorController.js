const db = require ('../Models')



const Sponsor = db.Sponsor

//1.add sponsor

const addSponsor = async (req,res) => {

    let info = {

        Nom:req.body.Nom,
        Materiel:req.body.Materiel,
        DateEntree: req.body.DateEntree,
        Quantite:req.body.Quantite,
        Types: req.body.Types,
        Adresse:req.body.Adresse,
        Cp:req.body.Cp,
        Ville:req.body.Ville,
    }
    console.log(info)
    const sponsor = await Sponsor.create(info)
    res.status(200).send(sponsor)
    console.log(sponsor);
}

const getAllSponsors = async (req,res) => {
    let sponsors = await Sponsor.findAll({})
    console.log(sponsors)
    res.status(200).send(sponsors)
}

module.exports={
    addSponsor,
    getAllSponsors,
}