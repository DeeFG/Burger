
var express = require("express");
var db = require("../models");
var router = express.Router();



router.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname,"public/index.html"));
})

router.get("/api/allburgers", function (req, res) {
    db.Burger.findAll({}).then(function (data) {
        res.json(data);
    })

});
router.post("/api/addburgers", function (req, res) {
    db.Burger.create({
        name:req.body.name,
        devoured:req.body.devoured
    }).then(function (data) {
        res.json(data);
    })
});

router.put("/api/updateburgers/:id", function (req, res) {
    
    db.Burger.update({
        devoured:req.body.devoured
    },{
        where:{
            id:req.params.id
        }
    }).then(function(data)
    {
        res.json(data);
    })    
});

    module.exports = router;








