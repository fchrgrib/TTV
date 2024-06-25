import {Request, Response} from "express"

export const FindTtv = async (req: Request, res: Response) => {
    const findBy = req.query['findby']
    const value = req.query['value']
    const limit = req.query['limit'] || 0
    const page = req.query['page'] || 1
    const offset = page ? ((+page) - 1) * (+limit) : 0
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
        case 'limit':
            db.connect.query('SELECT * FROM ttv LIMIT ? OFFSET ?', [limit, offset], (err: any, result: any) => {
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
        case 'name':
            db.connect.query('SELECT * FROM ttv WHERE ILIKE ', [`%${value}%`], (err: any, result: any) => {
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
            db.connect.query('SELECT * FROM ttv ORDER BY created_at DESC', (err: any, result: any) => {
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