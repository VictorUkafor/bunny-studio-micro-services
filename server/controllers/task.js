import { Task } from '../models';


// create user
export const createTask = async (req, res) => {
  const { description } = req.body;
  const { user } = res;

  try {
    Task.create({
      userId: user.id,
      description
    });

    return res.status(201).send({
      success: 'Task added successfully'
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


// create user
export const updateTask = async (req, res) => {
  const { description, state } = req.body;
  const { task } = res;

  try {
    task.update({
      description: description || task.description,
      state: state || task.state
    }, { where: { id: task.id } });

    return res.status(201).send({
      success: 'Task update successfully'
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


// create user
export const deleteTask = async (req, res) => {
  const { task, user } = res;

  try {
    Task.destroy({ where: {
      id: task.id,
      userId: user.id
    } 
  });

    return res.status(200).send({
      success: 'Task delete successfully'
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


// view a task
export const task = (req, res) => {
  const { task } = res;

  return res.status(200).send({ task });

};


// view all tasks
export const allTasks = (req, res) => {
  const { user } = res;

  return res.status(200).send({
    tasks: user.tasks
  });
};
