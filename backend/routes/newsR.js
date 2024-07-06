const express = require('express');
const TechN = require('../models/news');
const multer = require('multer');

const router = express.Router();

// 2
const upload = multer({ dest: 'images/' })

router.post('/postNews',upload.single('image'), async function(req, res) {
      try {
        const imageName = req.file.filename;
  const description = req.body.description;
        
        const newNews =  new TechN({
            imageName,
            description,
        })
        const savedTechN =  await newNews.save();
        console.log(description, imageName)
    res.send(savedTechN);
      } catch (error) {
        console.log(error.message);
      }
})

router.get('/getTech', async function(req, res) {
    try {
        const techData = await TechN.find();
    res.send(techData);
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/updateTech', async function(req, res) {
    try {
        const id = req.params.id;
        const updatedTech = await TechN.findByIdAndUpdate({_id: id}, req.body);
        res.send(updatedTech);
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/deleteTech', async function(req, res) {
    try {
        const id = req.params.id;
        const deletedTech = await TechN.findByIdAndDelete({_id: id});
        res.send(deleteTech);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;