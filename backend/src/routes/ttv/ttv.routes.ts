import {FindTtv} from "../../controllers/ttv/ttv.get";
import {Express} from "express";
import {AddTTV} from "../../controllers/ttv/ttv.add";
import {DeleteTTVById} from "../../controllers/ttv/ttv.delete";
import {UpdateTTVById} from "../../controllers/ttv/ttv.update";

export default function TTVRouter(router: Express) {
    router.get('/ttv', FindTtv)
    router.post('/ttv', AddTTV)
    router.delete('/ttv/:id', DeleteTTVById)
    router.put('/ttv/:id', UpdateTTVById)
}