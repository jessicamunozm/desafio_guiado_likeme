import express from "express";
import router from "./routes/router.js"
const app = express ()
const PORT = process.env.PORT || 3000

// middleware
app.use ('/', router)















app.listen (PORT, () => console.log  (`Servidor levantado en puerto http://localhost:${PORT}`))