// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface ILogin extends Document {
  email: string;
  password: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new Schema<ILogin>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  const user = this as ILogin;
  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Login = mongoose.model<ILogin>('Login', userSchema);

// === TEMPORARY: Create a hardcoded user (for testing purposes) ===
const createHardcodedUser = async () => {
  try {
    const user = await Login.findOne({ email: 'user@example.com' });
    if (!user) {
      const hashedPassword = await bcrypt.hash('password123', 10);
      const newUser = new Login({
        email: 'user@example.com',
        password: hashedPassword, // Store the hashed password
      });
      await newUser.save();
      console.log('Hardcoded user created!');
    } else {
      console.log('User already exists!');
    }
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

// Call the function to create a hardcoded user when this file is executed
createHardcodedUser();


export default Login;
