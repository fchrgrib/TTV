import express, {Express} from 'express'
import cors from 'cors'
import MainRouter from "./routes/main.routes";


const app: Express = express()
const port = process.env.PORT || 8080
const db = require('./services/db.connection')
app.use(express.json())
app.use(cors())
db.connect.connect()
MainRouter(app)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});