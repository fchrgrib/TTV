import express, {Express} from 'express'
import cors from 'cors'
import MainRouter from "./routes/main.routes";


const app: Express = express()
const port = process.env.PORT || 8080
const db = require('./services/db.connection')
app.use(express.json())
app.use(cors({credentials: true, origin:['*'], methods: ['GET', 'POST', 'PUT', 'DELETE'],}))

db.connect.connect()
MainRouter(app)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    db.connect.query('INSERT INTO ttv(tekanan_darah, denyut_nadi, suhu_tubuh, laju_nafas, tinggi_badan, berat_badan) VALUES(?,?,?,?,?,?)',["tekanan_darah", "sdfsdfs","sdfgsdgsdg","sdgfsdgsg","sdfsdf","sdgfsdgsd"], (err: any, result: any) => {
        if (err) {
            console.log(err)
            res.send('error')
        } else {
            res.send('success')
        }
    })
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});