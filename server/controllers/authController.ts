import { Request, Response, RequestHandler } from "express"; 
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import Users from "../models/Users";


const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const signup: RequestHandler = async (req, res) => { 
    
    try {


        const { name, email, password } = req.body;
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const user = new Users({ name, email, password: hashedpassword });
        await user.save();

        res.status(201).json({ message: 'User created successfully' });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }

};



export const login: RequestHandler = async (req, res) => { // Add RequestHandler type
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });

        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

        res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};