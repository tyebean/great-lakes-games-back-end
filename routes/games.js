import { Router } from "express";
import * as gamesCtrl from '../controllers/games.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/', gamesCtrl.index) 
router.get('/:id', gamesCtrl.show)

/*---------- Protected Routes ----------*/

export { router }

