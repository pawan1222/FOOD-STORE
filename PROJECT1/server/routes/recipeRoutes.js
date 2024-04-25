const express =require('express');
const router=express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes
 */
router.get('/',recipeController.homepage);
router.get('/account',recipeController.accountPage);
router.get('/about',recipeController.aboutPage);
router.get('/contact',recipeController.contactPage);
router.get('/recipe/:id',recipeController.exploreRecipe);
router.get('/categories',recipeController.exploreCategories);
router.get('/categories/:id',recipeController.exploreCategoriesById);
router.post('/search',recipeController.searchRecipe);
router.get('/explore-latest',recipeController.exploreLatest);
router.get('/explore-random',recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
//router.put('/recipe/:id', recipeController.updateRecipe);
router.delete('/recipe/:id', recipeController.deleteRecipe);
module.exports=router;