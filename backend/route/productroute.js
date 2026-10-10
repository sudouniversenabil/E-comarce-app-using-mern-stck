import express from "express";


import {
    addProudut, listProudut, removeProudut, singleProudut
} from "../controloer/productcontorler.js";
import upload from "../middleware/malter.js";
import adminauth from "../middleware/adminauth.js";





const productRouter = express.Router();

productRouter.post("/add", adminauth, upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]), addProudut);

productRouter.post("/remove", adminauth, removeProudut);
productRouter.get("/list", listProudut);
productRouter.post("/single", singleProudut);

export default productRouter;
