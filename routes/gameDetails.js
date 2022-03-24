import { Router } from "express";
import * as gameDetailsCtrl from '../controllers/game.js'
const router = Router()

/*---------- Public Routes ----------*/

router.get('/game-details', gameDetailsCtrl.index)

/*---------- Protected Routes ----------*/

export { router }

