// Service.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Login from '../model/login.model';

class UserService {
  // Register a new user (Signup)
  async register(email: string, password: string) {
    const existingUser = await Login.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }
     console.log("this is  register attement:", email);
    console.log("Password from frontend:", password);

  const newUser = new Login({ email, password });
  await newUser.save();
  console.log("Password from DB:", newUser.password);


    const token = this.generateToken((newUser as typeof newUser & { _id: string })._id.toString()); 
    return token;
  }

  // Login a user
async login(email: string, password: string) {
  const user = await Login.findOne({ email });
  if (!user) {
    console.log("User not found for email:", email);
    throw new Error("Invalid credentials");
  }

  // ✅ Add debug logs here
  console.log("this is  login attement:", email);
  console.log("Password from frontend:", password);
  console.log("Password from DB:", user.password);

  const isMatch = await bcrypt.compare(password, user.password);
  console.log("Password match:", isMatch); // will print true or false

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = this.generateToken((user as typeof user & { _id: string })._id.toString());
  return token;
}

  // Generate a JWT token
  private generateToken(userId: string) {
    return jwt.sign({ userId }, 'jwtSecret', { expiresIn: '1h' });
  }

  // Logout (usually done in frontend)
 logout() {
    return 'Logged out successfully'; // Just a message for now; token handling is client-side
  }
}

export default new UserService();
