import { Router } from "express";
import * as gamesCtrl from '../controllers/games.js'
const router = Router()

/*---------- Public Routes ----------*/

router.get('/games', gamesCtrl.index)

/*---------- Protected Routes ----------*/

export { router }

