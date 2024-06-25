import {Request, Response} from "express"

export const UpdateTTVById = async (req: Request, res: Response) => {
    const id = +req.params['id']
    if (!id) {
        return res.status(400).send({
            status: "error",
            status_code: 400,
            message: "id not found"
        })
    }

    const {nama, tekanan_darah, denyut_nadi, laju_nafas, suhu_tubuh, tinggi_badan, berat_badan} = req.body
    if (!(nama && tekanan_darah && denyut_nadi && laju_nafas && suhu_tubuh && tinggi_badan && berat_badan)){
        return res.status(400).send({
            status: "error",
            status_code: 400,
            message: "your not fill anything",
        })
    }

    try{
        const db = require('../../services/db.connection')
        db.connect.query('UPDATE ttv SET tekanan_darah = ?, denyut_nadi = ?, suhu_tubuh = ?, laju_nafas = ?, tinggi_badan = ?, berat_badan = ?, nama = ? WHERE id = ?',
            [tekanan_darah, denyut_nadi, suhu_tubuh, laju_nafas, tinggi_badan, berat_badan, nama, id],
            (err: any, result: any) => {
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
    }catch (e) {
        console.error(e)
        return res.status(500).send({
            status: "error",
            status_code: 500,
            message: "Internal server error"
        })
    }
}