import joi from 'joi'

export const validateUserReg= (req, res , next) =>{
      const schema = joi.object({
        username: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).required()
      });

      const {error} = schema.validate(req.body);
      
      if(error){
        res.status(400).send(error.details[0].message)
      }

      next();
}