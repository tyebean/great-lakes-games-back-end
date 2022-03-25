import { Router } from "express";
import * as gamesCtrl from '../controllers/games.js'
const router = Router()

/*---------- Public Routes ----------*/

// index, create, update, delete, show
router.get('/games', gamesCtrl.index)

/*---------- Protected Routes ----------*/

export { router }

