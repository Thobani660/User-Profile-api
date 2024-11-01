const express = require("express")
const userRoute = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorHandler")
const app = express(App)
const port = 5050

app.use(express.json())
use("./routes/userRoutes.js")