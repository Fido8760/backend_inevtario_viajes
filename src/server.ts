import express from 'express' 
import colors from 'colors'
import morgan from 'morgan'
import { db } from './config/db'
import asignacionRouter from './routes/asignacionRouter'
import authRouter from './routes/authRouter'

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.blue.bold('Conexión exitosa a BD'))
    } catch (error) {
        //console.log(error)
        console.log(colors.red.bold('Falló la Conexión a la BD'))

    }
}

connectDB()

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/v1/assignments', asignacionRouter)
app.use('/api/v1/auth', authRouter)

export default app