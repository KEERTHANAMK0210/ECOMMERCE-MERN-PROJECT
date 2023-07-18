import categoryModel from "../models/categoryModel.js"
import slugify from "slugify"
import JWT from "jsonwebtoken"

export const createCtegoryController = async(req,res)=>{
    try {
        const {name} =req.body
        if(!name){
            return res.status(401).send({message:'Name is required'})
        }
        const existingCategory=await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:'Category Already Exisist'
            })

        }
        const category = await new categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:'new category created',
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in Category'
        })
    }

}

//update category
export const updateCtegoryController = async(req,res) =>{
    try {
        const {name} =req.body
        const {id} = req.params
        const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:'Ctegory Updated Successfully',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while updating Category'

        })
        
    }

}

//get all  category
export const categoryController =async (req,res) =>{
    try {
        const category=await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:'All Categries List',
            category,

        })

     } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while geting all Categories'
        })
        
    }

}

//get single category

export const singleCategoryController =async (req,res) =>{
    try {
        const category = await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:'Get Single Category Successfully',
            category,
        })
        

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while geting single category'
        })
        
    }


}


//delete category
export const deleteCategoryController=async(req,res)=>{
    try {
        const {id} = req.params
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Category Deleted Succussfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while deleting category'
        })
        
    }
}