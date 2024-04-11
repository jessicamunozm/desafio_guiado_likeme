import {pool} from '../config/db.js'

const getData = async () => {
    try {
    const query = {
    text: 'select * from posts'    
    }
    const response = await pool.query(query)
    return response.rows
    } catch (error) {
    console.log(error.message)
}}

export {
    getData
}