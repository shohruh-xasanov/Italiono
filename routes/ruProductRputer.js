const router = require("express").Router();
const upload = require("../fileUpload/imageUpload");
const {createProduct, getAll,getElementByID,productDelete,productUpdate} = require('../controllers/ruProductController')

router.route("/product/ru")
    .post(upload.fields([
        {name:'poster',}, 
        {name:'images'}]),createProduct)
    .get(getAll)

    router.route('/product/ru/:id')
    .get(getElementByID)
    .delete(productDelete)
    .put(upload.fields([
      {name:'poster'}, 
      {name:'images'}]),productUpdate)

module.exports = router;
