import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductItemController, deleteProductItemController, getProductItemController, productItemPhotoController, updateProductItemController } from "../controllers/ProductItemController.js";
import formidable from "express-formidable";





const router = express.Router();




//routes
router.post(
    "/create-productItem",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductItemController
  );
  //routes
  router.put(
    "/update-productItem/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductItemController
  );
  
  //get products Item
  router.get("/get-productItem", getProductItemController);
  
  //single product
//   router.get("/get-productItem/:slug", getSingleProductController);
  
  //get Product photo Item
  router.get("/productItem-photo/:pid", productItemPhotoController);
  
  //delete product Item
  router.delete("/delete-productItem/:pid", deleteProductItemController);
  








export default router;