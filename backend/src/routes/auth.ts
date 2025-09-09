import { Router } from "express";
import UserService from "../middleware/service";

const router = Router();

// POST /api/register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await UserService.register(email, password);
    res.json({ token });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ msg: err.message });
    } else {
      res.status(400).json({ msg: "An unknown error occurred" });
    }
  }
});

// POST /api/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await UserService.login(email, password);
    res.json({ token });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ msg: err.message });
    } else {
      res.status(400).json({ msg: "An unknown error occurred" });
    }
  }
});

// POST /api/logout
router.post("/logout", (req, res) => {
  try {
    const message = UserService.logout();
    res.json({ msg: message });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

export default router;
