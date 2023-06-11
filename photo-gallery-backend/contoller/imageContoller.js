const uploadMiddleware = require("../middlewares/MulterMiddleware");
const UploadModel = require("../models/UploadModel");


const getAllImages =async (req, res) => {
    const allPhotos = await UploadModel.find().sort({ createdAt: "descending" });
    res.send(allPhotos);
  }


  const saveImage = async(req, res) => {
    // const photos = req.files.map((file) => file.filename);
  
    // console.log(photos);
  
    UploadModel.insertMany(req.files.map((file) => ({ photo: file.filename })))
      .then((data) => {
        console.log("Uploaded Successfully...");
        console.log(data);
        res.status(200).send({
          data,
          masg:'sucess!!'
        });
      })
      .catch((err) => console.log(err));
  }


  const deleteImage =  async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedPhoto = await UploadModel.findByIdAndDelete(id);
      if (!deletedPhoto) {
        return res.status(404).send({ message: "Photo not found" });
      }
      res.send({ message: "Photo deleted successfully", deletedPhoto });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
  }










  module.exports={getAllImages,saveImage,deleteImage}