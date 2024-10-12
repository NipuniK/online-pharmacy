// routes/protected.ts
import express from 'express';
import auth from '../middleware/auth';

const router = express.Router();

// GET /dashboard
router.get('/dashboard', auth, (req, res) => {
  res.json({ msg: 'Welcome to the dashboard' });
});

export default router;
