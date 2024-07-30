import express from 'express';
import { User, IUser } from '../model/user.model';

const router = express.Router();

// Create a new user
router.post('/create', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = new User({ username, email, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err: unknown) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Find a user by email
router.get('/find/:email', async (req, res) => {
  try {
    const user: IUser | null = await User.findOne({ email: req.params.email }).exec();
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err: unknown) {
    console.error('Error finding user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
