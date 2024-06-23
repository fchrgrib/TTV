import {Request, Response} from "express"


export const AddTTV = async (req: Request, res: Response) => {
    if (req.body == null){
        return res.status(400).send({
            status: "error",
            status_code: 400,
            message: "your not fill anything",
        })
    }

    const {tekanan_darah, denyut_nadi, laju_nafas, suhu_tubuh, tinggi_badan, berat_badan} = req.body
    if (!(tekanan_darah && denyut_nadi && laju_nafas && suhu_tubuh && tinggi_badan && berat_badan)){
        return res.status(400).send({
            status: "error",
            status_code: 400,
            message: "your not fill anything",
        })
    }

    try{
        const db = require('../../services/db.connection')
        db.connect.query('INSERT INTO ttv(tekanan_darah, denyut_nadi, suhu_tubuh, laju_nafas, tinggi_badan, berat_badan) VALUES(?,?,?,?,?,?)',
            [tekanan_darah, denyut_nadi, suhu_tubuh, laju_nafas, tinggi_badan, berat_badan],
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