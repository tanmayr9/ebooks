// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // folder for uploads
// const upload = multer({ dest: "uploads/" });

// app.post("/submit-payment", upload.single("screenshot"), (req, res) => {
//   const { email } = req.body;

//   if (!email || !req.file) {
//     return res.status(400).json({ message: "Email and screenshot are required" });
//   }

//   // save email as a text file inside uploads folder
//   const emailFilePath = path.join(__dirname, "uploads", `${Date.now()}-${email}.txt`);
//   fs.writeFileSync(emailFilePath, email);

//   return res.json({ message: "Payment received successfully!" });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });
