// routes/auth.ts
import express from 'express';
import Login from '../model/login.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

const Owner= new Login({
    username:'malithi',
    passwored:'1234fr'
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const login = await Login.findOne({ username });
  if (!login) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, login.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

});

export default router;
