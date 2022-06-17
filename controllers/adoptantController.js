const db = require ('../Models')

//image
const multer = require('multer')
const path = require ('path')

//creation
const Adoptant = db.Adoptant

//1.add adoptant

const addAdoptant = async (req,res) => {

    let info = {
        Image:req.path.file,
        Nom:req.body.Nom,
        Adresse:req.body.Adresse,
        CP:req.body.CP,
        Ville:req.body.Ville,
        ContactMail:req.body.ContactMail,
        ContactPortable:req.body.ContactPortable,
        Artichats:req.body.Artichats,
        Note:req.body.Note,

    }
    console.log(info)
    const adoptant = await Adoptant.create(info)
    res.status(200).send(adoptant)
    console.log(adoptant)
}

//2get all adoptant

const getAllAdoptants = async (req,res) => {

    let adoptants = await Adoptant.findAll({})
    console.log(adoptants);
    res.status(200).send(adoptants)
}

const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images/Adoptants')
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

module.exports={
    addAdoptant,
    getAllAdoptants,
    upload,
}