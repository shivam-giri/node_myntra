//-----------Router level medleware----------
const express = require("express");
const router = express.Router();

//@http method
//@discription its profile get information
//@access public

router.get('/',(req,res) =>{
   res.send("i m auth router");
});

module.exports = router;