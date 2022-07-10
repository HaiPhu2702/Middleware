import {Router} from "express"
const router=Router()


import{AuthController} from "../../controllers/auth/auth.controller";

import {MiddlewareAuth} from "../../middleware/auth.middleware"


router.get('/', AuthController.home)

router.get('/login', AuthController.showLogin)

router.post('/login',MiddlewareAuth.checkLogin,AuthController.showAmin)



export default router;