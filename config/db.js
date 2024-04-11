import pg from 'pg'
const {Pool} = pg

process.loadEnvFile()

const {USER, PASSWORD, HOST, NAME} = process.env

const config = {
    user: USER,
    password: PASSWORD,
    host: HOST,
    database: NAME,
    allowExitOnIdle: true
}

//exportándolo en 1 sola línea, para importarla se debe llamar entre {}
export const pool = new Pool (config)