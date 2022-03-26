import { Router } from "express";
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()

/*---------- Public Routes ----------*/
router.get('/reviews', reviewsCtrl.index) 
router.get('/reviews/:id', reviewsCtrl.show)

router.get('/reviews/comments', reviewsCtrl.indexComment) 

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, reviewsCtrl.create)
router.put('/:id', checkAuth, reviewsCtrl.update)
router.delete('/:id', checkAuth, reviewsCtrl.delete)

router.post('/comments', checkAuth, reviewsCtrl.createComment)
router.delete('/comments/:id', checkAuth, reviewsCtrl.deleteComment)


export { router } 