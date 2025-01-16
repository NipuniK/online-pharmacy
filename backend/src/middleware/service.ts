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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Login({ email, password: hashedPassword });
    await newUser.save();

    const token = this.generateToken((newUser as typeof newUser & { _id: string })._id.toString()); 
    return token;
  }

  // Login a user
  async login(email: string, password: string) {
    const user = await Login.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = this.generateToken((user as typeof user &{_id: string} )._id.toString());
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
