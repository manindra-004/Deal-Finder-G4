const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req,res,cb){
        cb(null, path.join(__dirname, './uploads'));
    },
    filename: function (req, file, cb) {
        const fileExtension = file.originalname.split(".").pop();
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        const allowedExtensions = ["png", "pdf"];
        if (allowedExtensions.includes(fileExtension)) {
          cb(null, filename + "-" + uniqueSuffix + "." + fileExtension);
        } else {
          cb(new Error("Invalid file type"));
        }
      },
});

exports.upload = multer({storage: storage});