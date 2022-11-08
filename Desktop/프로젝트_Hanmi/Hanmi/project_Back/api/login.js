const express = require("express");

const router = express.Router();
var sql = require('mssql');
// router.get("/", (req, res) => {
//     res.send("Hello world");
// });
   
 router.post("/", (req, res) => async () =>{

 console.log("/api/login 호출")
    console.log(req.body)

    res.json({ok: false})
})

   


module.exports = router;