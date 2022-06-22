const db = require ('../Models')

//image
const multer = require('multer')
const path = require ('path')

//creation
const AnimalIn = db.AnimalIn

//1.addanimalin

const addAnimalIn = async (req,res) => {
    
    let info = {
        Image: req.file.path,
        Nom: req.body.Nom,
        currentSexe: req.body.currentSexe,
        Age: req.body.Age,
        Poids: req.body.Poids,
        DateEntree: req.body.DateEntree ,
        Etat: req.body.Etat,
        Traitement: req.body.Traitement ,
        FamilleAccueil: req.body.FamilleAccueil,
        Note:req.body.Note,
    }

    console.log(info)
    const animalin = await AnimalIn.create(info)
    res.status(200).send(animalin)
    console.log(animalin)
}
//2. get all animalin

const getAllAnimalIns = async (req,res) => {
    console.log(42);
    let animalIns = await AnimalIn.findAll({})
    console.log(animalIns);
    res.status(200).send(animalIns) 
    
}

//3. get one animalin

const getOneAnimalIn = async (req, res) => {
    let id = req.params.id
    let animalin = await AnimalIn.findOne({where: {id:id}})
    res.status(200).send(animalin)
}

//4. delete
const deleteAnimalIn = async (req,res) => {
    let id = req.parmas.id

    await AnimalIn.destroy({where:{id: id}})
    res.status(200).send(`artichat : ${Nom} effacer de la base de donnee`)
}

//5. delete par id
const updateAnimalIn = async (req, res) => {
    let id = req.params.id
    const animalin = await AnimalIn.update(req.body,{where: {id:id}})
    res.status(200).send(animalin)
}


//6. upload les Image

const storage = multer.diskStorage({
    destination:( req,file,cb) => {
        cb(null,'./Images')
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
    addAnimalIn,
    getAllAnimalIns,
    getOneAnimalIn,
    updateAnimalIn,
    deleteAnimalIn,
    

    upload,

}