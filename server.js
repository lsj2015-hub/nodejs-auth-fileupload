require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const authRoutes = require('./routes/auth-routes')
const homeRoutes = require('./routes/home-routes')
const adminRoutes = require('./routes/admin-routes')
const uploadImageRoutes = require("./routes//image-route")

const app = express()
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/home", homeRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/image", uploadImageRoutes)

connectToDB()

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})