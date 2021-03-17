import {Router} from 'express';
import userController from '../userController/userController';

const router = Router();

// router.get('/',(req,res)=>{
//     res.status(200).json({message:'hihihihi'})
// })

router.get('/',userController.getUser);

export default router;