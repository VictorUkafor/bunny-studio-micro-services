import { User } from '../models';


export const nameRequired = (req, res, next) => {
    const { name } = req.body;

    if(!name || !name.length){
        return res.status('400').send({
            errors: {
                name: 'Please enter a valid name'
            }
        })
    }

    return next();
}


export const userExist = async (req, res, next) => {
    const { name } = req.body;

    try{
        const user = await User.findOne({ 
            where: { name } 
        });

        if(user){
            return res.status(403).send({
                errors: {
                    message: 'Name taken already'
                }
            });
        }

        return next();

    } catch(e){
        return res.status(500).send({
            errors: {
                message: 'Internal server error',
                e
            }
        });
    }

}



export const findUser = async (req, res, next) => {
    const { id } = req.params;

    try{
        const user = await User.findOne({ 
            where: { id } 
        });

        if(user){
            res.user = user;
            return next();
        }

        return res.status(404).send({
            errors: {
                message: 'User could not be find'
            }
        })

    } catch(e){
        return res.status(500).send({
            errors: {
                message: 'Internal server error',
                e
            }
        });
    }

}


export const nameExist = async (req, res, next) => {
    const { name } = req.body;
    const { user } = res;

    try{
        const findUser = await User.findOne({ 
            where: { name } 
        });

        if(!findUser || user.id === findUser.id){
            return next();
        }
        
        return res.status(403).send({
            errors: {
                message: 'Name taken already'
            }
        });
        

    } catch(e){
        return res.status(500).send({
            errors: {
                message: 'Internal server error',
                e
            }
        });
    }

}