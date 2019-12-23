import express from 'express';


const routes = express.Router();


routes.get('/user', (req, res) => {
  return res.send('You are welcome').status(200);
});



export default routes;
