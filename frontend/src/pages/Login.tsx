import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import API from "../api/api"; // Assuming your API client is correctly configured
import { Form, Button, Alert } from "react-bootstrap"; // Import what's needed

import CompanyLogo from '../assets/logo.webp'; // Your company logo

// If loginbg.jpg is used as a CSS background-image, you don't need to import it here.
//import LoginIllustration from '../assets/loginbg.jpg';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await API.post('/auth/login', formData);
            setMessage(`Welcome back, ${res.data.user.name}!`);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            const role = res.data.user.role;
            if (role === 'admin') navigate('/admin');
            else if (role === 'employee') navigate('/employee');
            else navigate('/login'); // Fallback if role is not recognized

        } catch (err: any) {
            setMessage(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="login-page-container">
            {/* Left Section: Illustration (now handled by CSS background-image) */}
            <div className="login-illustration-section">
                {/* Remove the img tag if loginbg.jpg is your full background image */}
                {/* <img src={LoginIllustration} alt="Login Illustration" style={{ maxWidth: '80%', height: 'auto' }} /> */}
            </div>

            {/* Right Section: Login Form */}
            <div className="login-form-section">
                <div className="login-form-card">
                    <div className="login-logo">
                        <img src={CompanyLogo} alt="Company Logo" />
                    </div>
                    <h2 className="login-heading">Welcome Back</h2>
                    {message && <Alert variant={message.startsWith('Welcome') ? 'success' : 'danger'}>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 btn-primary">
                            Log In
                        </Button>

                        <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                        <p className="contact-admin-link">Don't have an account? <a href="#">Contact Admin</a></p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;

// import React, { useState } from "react";

// import { useNavigate } from 'react-router-dom';
// import API from "../api/api";
// import { Form, Button, Container, Alert } from "react-bootstrap";

// const Login: React.FC = () => {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [message, setMessage] = useState<string | null>(null);
//     const navigate = useNavigate();

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     }

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const res = await API.post('/auth/login', formData);
//             setMessage(`Welcome back, ${res.data.user.name}!`);

//             localStorage.setItem('token', res.data.token);
//             localStorage.setItem('user', JSON.stringify(res.data.user));

//             const role = res.data.user.role;
//             if (role === 'admin') navigate('/admin');
//             else if (role === 'employee') navigate('/employee');
//             else navigate('/login'); 

//         } catch (err: any) {
//             setMessage(err.response?.data?.message || 'Login failed. Please try again.');
//         }
//     };

//     return (
//         <Container className="mt-5" style={{ maxWidth: '400px' }}>
//             <h2 className="mb-4">Login</h2>
//             {message && <Alert variant={message.startsWith('Welcome') ? 'success' : 'danger'}>{message}</Alert>}
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formEmail">
//                     <Form.Control
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formPassword">
//                     <Form.Control
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100">Log In</Button>
//             </Form>
//         </Container>
//     );
// };

// export default Login;