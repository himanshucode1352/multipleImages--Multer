const { Router } = require("express");
const uploadMiddleware = require("../middlewares/MulterMiddleware");
const UploadModel = require("../models/UploadModel");
const { getAllImages, saveImage, deleteImage } = require("../contoller/imageContoller");

const router = Router();

router.get("/api/get", getAllImages);

// router.post("/api/save", uploadMiddleware.single("photo"), (req, res) => {
//   const photo = req.file.filename;

//   console.log(photo);

//   UploadModel.create({ photo })
//     .then((data) => {
//       console.log("Uploaded Successfully...");
//       console.log(data);
//       res.send(data);
//     })
//     .catch((err) => console.log(err));
// });

router.post("/api/save", uploadMiddleware.array("photo", 10), saveImage);



router.delete("/api/delete/:id",deleteImage);

module.exports = router;