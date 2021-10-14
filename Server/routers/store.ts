import express from 'express'
import { 
    getStores,
    getStoreById
} from '../controllers/store'



const router = express.Router()


router.route('/') .get(getStores)
router.route('/:id') .get(getStoreById)

export default router