import express from 'express'
import path from 'path'
import {getData} from '../queries/consultas.js'
const __dirname = import.meta.dirname
const router = express.Router()


router.get ('/', (req, res) => {
    res.sendFile (path.join(__dirname, '../views/index.html'))
})

router.get ('/posts', async(req, res) => {
    const result = await getData()
    res.json(result)
})




router.get('*', (req, res) => {
    res.send('ruta no encontrada')
})

export default router