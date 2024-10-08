import express from "express";
import  {getAllUser,getUserInfoByID,createUser} from '../controller/user.controller.js'



const router=express.Router(); 


router.route('/').get(getAllUser);
router.route('/').post(createUser); 
router.route('/:id').get(getUserInfoByID); 



export default router; 