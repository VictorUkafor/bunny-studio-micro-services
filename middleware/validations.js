import { User, Task } from '../models';


// for checking if name was supplied for
// user creation
export const nameRequired = (req, res, next) => {
  const { name } = req.body;

  if (!name || !name.length) {
    return res.status('400').send({
      errors: {
        name: 'Please enter a valid name'
      }
    });
  }

  return next();
};


// for validating description for task creation
export const descriptionRequired = (req, res, next) => {
  const { description } = req.body;

  if (!description || !description.length) {
    return res.status('400').send({
      errors: {
        name: 'Please enter a valid description'
      }
    });
  }

  return next();
};


// for checking if a user already exist
// when creating a new user
export const userExist = async (req, res, next) => {
  const { name } = req.body;

  try {
    const user = await User.findOne({
      where: { name }
    });

    if (user) {
      return res.status(403).send({
        errors: {
          message: 'Name taken already'
        }
      });
    }

    return next();
  } catch (e) {
    return res.status(500).send({
      errors: {
        message: 'Internal server error',
        e
      }
    });
  }
};


// for finding a user for either update or 
// delete purpose
export const findUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({
      where: { id },
      include: ['tasks']
    });

    if (user) {
      res.user = user;
      return next();
    }

    return res.status(404).send({
      errors: {
        message: 'User could not be find'
      }
    });
  } catch (e) {
    return res.status(500).send({
      errors: {
        message: 'Internal server error',
        e
      }
    });
  }
};


// for finding a task a user's task
export const findTask = async (req, res, next) => {
  const { taskId } = req.params;
  const { user } = res;

  try {
    const task = await Task.findOne({
        where: { 
            id: taskId,
            userId: user.id
        }
    });

    if (task) {
      res.task = task;
      return next();
    }

    return res.status(404).send({
      errors: {
        message: 'Task could not be find'
      }
    });
    
  } catch (e) {
    return res.status(500).send({
      errors: {
        message: 'Internal server error',
        e
      }
    });
  }
};


// for checking if a user's name exist for 
// update purpose
export const nameExist = async (req, res, next) => {
  const { name } = req.body;
  const { user } = res;

  try {
    const getUser = await User.findOne({
      where: { name }
    });

    if (!getUser || user.id === getUser.id) {
      return next();
    }

    return res.status(403).send({
      errors: {
        message: 'Name taken already'
      }
    });
  } catch (e) {
    return res.status(500).send({
      errors: {
        message: 'Internal server error',
        e
      }
    });
  }
};
