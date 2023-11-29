const router = require("express").Router();
const reviewModel = require("../models/reviews");

// add product
router.post("/api/products", async (req, res) => {
  
  try {
    const data = req.body;
    await reviewModel.create(data);

    res.status(200).json({
      success:true
     
    })
  } catch (error) {
    console.log(error);
  }
});

//get product
router.get('/api/products', async(req,res) =>{
    let review;
    try{
       review= await reviewModel.find();
       res.status(200).json({review});
    }
    catch(error){
        console.log(error);

    }
});

//get product with id
router.get("/api/products/:productId",async(req,res)=>{
    let reviewss;
    const id= req.params.id;
    try{
      reviewss=  await reviewModel.findById(id);
        res.status(200).json({reviewss})
    }
    catch(error){
        console.log(error);
    }
});



// update product by id
router.put("/api/products/:productId",async(req,res)=>{
    const id= req.params.id;
    const {
      name,
      description,
      price,
      category
      }=req.body;
    let reviewss;
    try{
     reviewss =   await reviewModel.findByIdAndUpdate(id,{
      name,
      description,
      price,
      category});
            await reviewss.save().then(()=> res.json({message:"data updated"}));
    }
    catch(error){
        console.log(error);
    }
});

//Delete product by id
router.delete("/api/products/:productId",async (req,res)=> {
    const id = req.params.id;
    try{
        await reviewModel.findByIdAndDelete(id)
        .then(()=>res.status(200)
        .json({message:"deleted successfully"}));

    } catch(error){
        console.log(error);
    }
});

// add review
router.post("/api/products/:productId/reviews", async (req, res) => {
  
  try {
    const data = req.body;
    await reviewModel.create(data);

    res.status(200).json({
      success:true
     
    })
  } catch (error) {
    console.log(error);
  }
});
// Update review
router.put("/api/products/:productId/reviews/:reviewId",async(req,res)=>{
  const id= req.params.id;
  const {
    content,
    rating,
    author,
    createdAt
    }=req.body;
  let reviewss;
  try{
   reviewss =   await reviewModel.findByIdAndUpdate(id,{
    content,
    rating,
    author,
    createdAt});
          await reviewss.save().then(()=> res.json({message:"data updated"}));
  }
  catch(error){
      console.log(error);
  }
});
// Delete review
router.delete("/api/products/:productId/reviews/:reviewId",async (req,res)=> {
  const id = req.params.id;
  try{
      await reviewModel.findByIdAndDelete(id)
      .then(()=>res.status(200)
      .json({message:"deleted successfully"}));

  } catch(error){
      console.log(error);
  }
});

module.exports = router;