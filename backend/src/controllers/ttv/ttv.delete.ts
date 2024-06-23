import {Request, Response} from "express"

export const DeleteTTVById = async (req: Request, res: Response) => {
    const id = +req.params['id']
    if (!id) {
        return res.status(400).send({
            status: "error",
            status_code: 400,
            message: "id not found"
        })
    }

    try {
        const db = require('../../services/db.connection')
        db.connect.query('DELETE FROM ttv WHERE id = ?', [id], (err: any, result: any) => {
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
                    message: "success"
                })
            }
        })
    } catch (e) {
        console.error(e)
        return res.status(500).send({
            status: "error",
            status_code: 500,
            message: "Internal server error"
        })
    }
}