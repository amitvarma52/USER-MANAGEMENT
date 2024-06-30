import express from 'express';
import { getAllUser, registerUser,getUserByID, userUpdateController, userDelete } from '../Controller/userController.js';

const router = express.Router();
// api routes

// api post methods
router.post('/user/Register/NewUser', registerUser);``             //working    

// get all
router.get('/user/data/allUsers',getAllUser);                      //working

// get by id
router.get('/user/UserByID/:id',getUserByID);                      //working

// update api
router.put('/user/editUser/:id',userUpdateController);             //working

//delete
router.delete('/user/removeUser/:id',userDelete);                  //working

export default router;