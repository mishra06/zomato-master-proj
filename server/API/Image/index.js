// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database modal
import { ImageModel } from "../../database/allModels";

//Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /image
Des       Uploads given image to S3 bucket, and saves file link to mongodb
Params    id
Access    Public
Method    POST 
*/
Router.post("/", upload.single("file", 4),  async (req, res) => {
    try {
       const file = req.file;

       // s3 bucket options
        const bucketOptions = {
         Bucket: "mishramasterproject06",
         Key: file.originalname,
         Body: file.buffer,
         ContentType: file.mimetype,
         ACL: "public-read",  // access control list
        };

       const uploadImage = await s3Upload(bucketOptions);

       return res.status(200).json({ uploadImage: "yay" });
       
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



export default Router;