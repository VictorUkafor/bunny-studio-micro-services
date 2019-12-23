import express from 'express';

import {
  nameRequired, userExist, findUser,
  nameExist, findTask, descriptionRequired
} from '../middleware/validations';

import {
  createUser, showUser, updateUser,
  destroyUser, findAllUsers
} from '../controllers/user';

import {
  createTask, updateTask, deleteTask,
  allTasks, task
} from '../controllers/task';


const routes = express.Router();


// user routes

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


// task routes

// create task
routes.post('/user/:id/task', findUser, descriptionRequired, createTask);

// update task
routes.put('/user/:id/task/:taskId', findUser, findTask, updateTask);

// view all tasks
routes.get('/user/:id/tasks', findUser, allTasks);

// view a task
routes.get('/user/:id/task/:taskId', findUser, findTask, task);

// delete task
routes.delete('/user/:id/task/:taskId', findUser, findTask, deleteTask);


export default routes;
