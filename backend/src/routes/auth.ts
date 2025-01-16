// routes/auth.routes.ts
import express from 'express';
import UserService from'../middleware/service';

const router = express.Router();

// POST /api/register (User Signup)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await UserService.register(email, password); // Call the registration service
    res.json({ token }); // Return JWT token on successful registration
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ msg: err.message });
    } else {
      res.status(400).json({ msg: 'An unknown error occurred' });
    }
  }
});

// POST /api/login (User Login)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await UserService.login(email, password); // Call the login service
    res.json({ token }); // Return JWT token on successful login
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ msg: err.message });
    } else {
      res.status(400).json({ msg: 'An unknown error occurred' });
    }
  }
});

// POST /api/logout (User Logout)
router.post('/logout', (req, res) => {
  // In practice, just clear the token in the frontend (e.g., localStorage)
  try {
    const message = UserService.logout();
    res.json({ msg: message });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;
