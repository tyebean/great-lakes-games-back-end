import { Router } from "express";
import * as gamesCtrl from '../controllers/games.js'
const router = Router()

/*---------- Public Routes ----------*/

router.get('/', gamesCtrl.index)

/*---------- Protected Routes ----------*/

export { router }

