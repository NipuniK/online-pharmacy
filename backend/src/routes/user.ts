import express from 'express';
import { User, IUser } from '../model/user.model';
const router = express.Router();


const newUser:IUser= new User({
  
  username: 'john',
  email: 'johnexample.com',
  password: 'securepassword123',
  firstName: 'John',
  lastName: 'Doe',


});
newUser.save()
.then(() => console.log('User created!'))
.catch((err:Error) => console.error('Error creating product:', err));

// Find a user by email
router.get('/user', async (req, res) => {
  try {
    const user = await User.find();
        res.json(user);
   /* const user: IUser | null = await User.findOne({ email: req.params.email }).exec();
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
      */
  } catch (err: unknown) {
    console.error('Error finding user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


export default router;
