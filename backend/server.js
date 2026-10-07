import express from "express";
import cors from "cors";
import "dotenv/config";
import connetdb from "./config/mongodb.js";
import connectCloudinay from "./config/cladnary.js";
import userRouter from "./route/userRoute.js";
import productRouter from "./route/productroute.js";

// Database
await connetdb();
//claudinay 
await connectCloudinay()

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// route endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);  // ✅ correct

//this is enpoints

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
