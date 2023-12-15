const express = require("express");
const apiRoute = require("./routes/routes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {console.log("el puerto es: " + PORT)});