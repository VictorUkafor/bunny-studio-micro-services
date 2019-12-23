import { User, Task } from '../models';


// create user
export const createUser = async (req, res) => {
  const { name } = req.body;

  try {
    await User.create({ name });

    return res.status(201).send({
      success: 'User created successfully'
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

// update user
export const updateUser = async (req, res) => {
  const { name } = req.body;
  const { user } = res;

  try {
    await user.update({
      name: name || user.name
    }, { where: { id: user.id } });

    return res.status(201).send({
      success: 'User update successfully'
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


// user a single user
export const showUser = (req, res) => {
  const { user } = res;

  return res.status(200).send({ user });
};


// show all users
export const findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: ['tasks']
    });

    return res.status(200).send({ users });
  } catch (e) {
    return res.status(500).send({
      errors: {
        message: 'Internal server error',
        e
      }
    });
  }
};


export const destroyUser = async (req, res) => {
  const { user } = res;

  try {
    User.destroy({ where: { id: user.id } });

    return res.status(200).send({
      success: 'User deleted successfully'
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
