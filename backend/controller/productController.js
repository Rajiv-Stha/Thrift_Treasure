const productModel = require("../models/productModel");

const createProduct = async (req, res, next) => {
  try {
    const newProduct = await productModel.create(req.body);
    return res.status(200).json({ message: newProduct });
  } catch (error) {
    next(error);
  }
};
const getProduct = async (req, res, next) => {
  const {category,_id}  = req.query;
  let products;
  try {
    if(category||_id){
      products = await productModel.find({...req.query}).populate("owner");
    }else{  
     products = await productModel.find({}).populate("owner");
    }
    return res.status(200).json({ message:products,status:200});

  } catch (error) {
    next(error);
  }
};
const reduceQuantityOfProduct=async(req,res,next)=>{
  const {product,quantity} =  req.body; 
  try {
        await productModel.findByIdAndUpdate(product,
        {
         $inc: { quantity: -quantity } 
        },
        {
        new:true,
        returnDocument:true
      })
      res.status(200).json({message:"transaction successfull",success:true})
  } catch (error) {
      next(error)
  }
}

const updateProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      {
        _id: productId,
      },
      {
        $set: req.body,
      },
      {
        returnDocument: true,
        new: true,
      }
    );
    return res.status(200).json({ message: updatedProduct });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    await productModel.deleteOne({ _id: productId });
    return res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    next(error);
  }
};

const searchProductByUser=async(req,res,next)=>{
  try {
     const searchedProduct =await  productModel.find({
              $or: [
                {
                  name: { $regex: req.query.search, $options: "i" },
                },
                { desc: { $regex: req.query.search, $options: "i" } },
              ],
            })

            res.status(200).json({message:searchedProduct,success:true})
  } catch (error) {
      next(error)
  }
}
module.exports = { createProduct,reduceQuantityOfProduct, getProduct, updateProduct, deleteProduct ,searchProductByUser};
