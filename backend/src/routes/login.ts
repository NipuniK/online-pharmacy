// routes/auth.ts
import express from 'express';
import Login from '../model/login.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Login.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'jwtSecret', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;
