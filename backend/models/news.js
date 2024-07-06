const { default: mongoose } = require("mongoose");

const newsSchema =  new mongoose.Schema({
  imageName: {
        type: String,
    },
    description: {
      type: String,
    },
    
}, { timestamps: true})


const TechN = mongoose.model("techN", newsSchema); 

module.exports = TechN;