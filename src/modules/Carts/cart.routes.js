import { Router } from 'express'
const router = Router()
import * as cartCon from './cart.controller.js'
import { asyncHandler } from '../../utils/errorhandling.js'
import { isAuth } from '../../middlewares/auth.js'

router.post('/', isAuth(), asyncHandler(cartCon.addToCart))
router.patch('/', isAuth(), asyncHandler(cartCon.deleteFromCart))

export default router
