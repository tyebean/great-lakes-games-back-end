import { Router } from "express";
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

// todo: USE checkAuth TO MAKE USERS SIGN IN BEFORE THEY CAN 
// TODO: -CREATE -UPDATE -DELETE REVIEWS & COMMENTS
// example: 
// router.put('/:id', checkAuth, reviewsCtrl.update)


const router = Router()

/*---------- Public Routes ----------*/
router.get('/', reviewsCtrl.index) 
// router.get('/:id', reviewsCtrl.show)
router.post('/', reviewsCtrl.create) 
router.put('/:id',reviewsCtrl. update)
router.delete('/:id', reviewsCtrl.delete)


router.get('/', reviewsCtrl.indexComment) 

/*---------- Protected Routes ----------*/
// todo: keep below code in here for when we implement auth !!!
router.use(decodeUserFromToken)


router.post('/', checkAuth, reviewsCtrl.createComment)
router.delete('/:id', checkAuth, reviewsCtrl.deleteComment)

export { router } 