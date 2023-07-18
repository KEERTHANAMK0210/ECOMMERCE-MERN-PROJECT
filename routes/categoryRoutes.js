import  express from "express";
import { categoryController, 
        createCtegoryController,
        deleteCategoryController, 
        singleCategoryController,
         updateCtegoryController } from "../controller/CategoryControll.js";
import { isAdmin, requireSignIn } from "../middleware/authmiddleware.js";


const router=express.Router()

//routes
//create category
router.post('/create-category',requireSignIn,isAdmin,createCtegoryController)

//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCtegoryController)

//getAll category
router.get('/get-category',categoryController)

//single category get
router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)



export default router