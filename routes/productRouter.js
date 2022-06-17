// import controllers review, products
const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController')
// router
const router = require('express').Router()
// use routers
router.post('/addProduct', productController.upload , productController.addProduct)
router.get('/allProducts', productController.getAllProducts)
router.get('/published', productController.getPublishedProduct)
// Review Url and Controller
router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)
// get product Reviews
router.get('/getProductReviews/:id', productController.getProductReviews)
// Products router
router.get('/product/:id', productController.getOneProduct)
router.put('/product/:id', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)
/***************************************/ 
/* import controller animalIn et out   */
/***************************************/ 

const animalInController = require ('../controllers/animalInController')
const animalOutController = require ('../controllers/animalOutController')


//utilisation des router in
router.post('/addAnimalIn', animalInController.upload,animalInController.addAnimalIn)
router.get('/getAllAnimalIns', animalInController.getAllAnimalIns)
//utilisation des router out
router.post('/addAnimalOut', animalOutController.upload,animalOutController.addAnimalOut)
router.get('/getAllAnimalOuts',animalOutController.getAllAnimalOut)
//check 2

router.get('/animalIn/:id',animalInController.getOneAnimalIn)
router.put("/animalIn/:id",animalInController.updateAnimalIn)
router.delete('/animalIn/:id',animalInController.deleteAnimalIn)


/*********************** */ 
/*    import adoptant    */
/*************************/  
const AdoptantController = require ('../controllers/adoptantController')
router.post('/addAdoptant',AdoptantController.upload,AdoptantController.addAdoptant)
router.get('/getAdoptants',AdoptantController.getAllAdoptants)

/*******************************/
/*    import famille accueil   */
/*******************************/
const FamilleAccueilController = require ('../controllers/familleAccueilController')
router.post('/addFamilleAccueil',FamilleAccueilController.addFamilleAccueil)
router.get('/getAllFamilleAccueil',FamilleAccueilController.getallFamilleaccueils)


/***********************************/
/**         Sponsor                */
/********************************* */

const SponsorController = require ('../controllers/sponsorController')
router.post('/sponsor/addSponsor',SponsorController.addSponsor)
router.get('/getAllSponsor',SponsorController.getAllSponsors)

/*********************************/
/**       equipements            */
/******************************* */

const equipementsController = require('../controllers/equipementController')
router.post('/postEquipement',equipementsController.upload,equipementsController.addEquipement)
router.get('/getEquipements',equipementsController.getAllEquipements)

module.exports = router