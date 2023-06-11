const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  
  filename: function (req, file, cb) {
    console.log(req,'wjkjjjjjjjj')
    cb(null, `${uuidv4()}_${path.extname(file.originalname)}`);
  },
});
console.log('object')
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadMiddleware = multer({ storage, fileFilter ,limits:{fileSize:100000}});

module.exports = uploadMiddleware;
