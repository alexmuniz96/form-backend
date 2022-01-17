import express from 'express'
import cors from 'cors'
import router from './routes'
import { createTable } from './controllers/devController'


const app = express()
app.use(express.json())
app.use(cors())

// route.get('/', (req: Request, res: Response) => {
//   res.json({ message: 'hello world with Typescript' })
// })

createTable()

app.use(router)

app.listen(3222, () => 'server running in port 3222')