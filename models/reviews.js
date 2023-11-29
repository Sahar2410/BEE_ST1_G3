const mongoose=require("mongoose");

const reviewModel = new mongoose.Schema({
    content: { type: String, required: true },
    rating: { type: Number, required: true },
    author: { type: String, required: true },
    createdAt: { type:Date , required: true }
    
}, 
 {
    name:{type: String , required:true },
    description:{type: String, required: true},
    price:{type: Number, required: true},
    category:{type: String, required: true}
    }
    
);

module.riviewM = new mongoose.model("reviews", reviewModel);

