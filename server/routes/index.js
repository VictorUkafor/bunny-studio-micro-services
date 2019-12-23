import express from 'express';
import { 
    nameRequired, userExist, findUser,
    nameExist
 } from '../middleware/validations';
import { 
    createUser, showUser, updateUser, 
    destroyUser, findAllUsers } from '../controllers/user';


const routes = express.Router();


// create user
routes.post('/user', nameRequired, userExist, createUser);

// update user
routes.put('/user/:id', findUser, nameExist, updateUser);

// delete user
routes.delete('/user/:id', findUser, destroyUser);

// view user
routes.get('/user/:id', findUser, showUser);

// view user
routes.get('/users', findAllUsers);


export default routes;
