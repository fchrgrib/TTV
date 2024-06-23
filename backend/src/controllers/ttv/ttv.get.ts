import {Request, Response} from "express"

export const FindTtv = async (req: Request, res: Response) => {
    const findBy = req.query['findby']
    const value = req.query['value']
    const db = require('../../services/db.connection')
    switch (findBy) {
        case 'id':
            db.connect.query('SELECT * FROM ttv WHERE id = ?', [value], (err: any, result: any) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: "error",
                        status_code: 500,
                        message: "Internal server error"
                    })
                } else {
                    return res.status(200).send({
                        status: "ok",
                        status_code: 200,
                        data: result
                    })
                }
            })
            break
        default:
            db.connect.query('SELECT * FROM ttv', (err: any, result: any) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: "error",
                        status_code: 500,
                        message: "Internal server error"
                    })
                } else {
                    return res.status(200).send({
                        status: "ok",
                        status_code: 200,
                        data: result
                    })
                }
            })
            break
    }
}