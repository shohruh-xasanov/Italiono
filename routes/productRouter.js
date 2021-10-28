const router = require("express").Router();
const upload = require("../fileUpload/imageUpload");
const {createProduct, getAll,getElementByID,productUpdate,productDelete} = require('../controllers/productController')

router.route("/product/uz")
    .post(upload.fields([
        {name:'poster',}, 
        {name:'images'}]),createProduct)
    .get(getAll)

router.route('/product/uz/:id')
      .get(getElementByID)
      .delete(productDelete)
      .put(upload.fields([
        {name:'poster'}, 
        {name:'images'}]),productUpdate)

module.exports = router;
