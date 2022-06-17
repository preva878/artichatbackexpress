const db = require ('../Models')

//image peu etre pour la suite
const multer = require ('multer')
const path = require('path')

//create
const Equipements = db.Equipement

//1. add equipements

const addEquipement = async (req,res) => {

    let info = {
        
        Image: req.file.path,
        Nom:req.body.Nom,
        Types:req.body.Types,
        Quantite: req.body.Quantite,
        DateEntree: req.body.DateEntree ,
        DatePeremption: req.body.DatePeremption ,
        Etats: req.body.Etats,        
    }
    console.log(info)
    const equipement = await Equipements.create(info)
    res.status(200).send(equipement)
    console.log(equipement)
}

//2. get all equipement

const getAllEquipements = async (req,res) => {
    let equipements = await Equipements.findAll({})
    console.log(equipements)
    res.status(200).send(equipements)
}

// upload image
const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images/Equipements')
    },
    filename: (req,file,cb) => {
        cb(null,Date.now() + path.extname(file.originalname))

        
    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('Image')


module.exports = {
    addEquipement,
    getAllEquipements,
    upload,
}