import {Express} from "express";


export default function MainRouter(router: Express) {
    router.use((req, res, next)=>{
        console.log(`🤖 Express Logging 🤖  ${req.ip} : \x1b[1m${req.method}\x1b[0m ${req.originalUrl} || :${res.statusCode}:`)
        next();
    })
}