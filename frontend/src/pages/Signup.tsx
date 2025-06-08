import React, { useState } from "react";
import API from "../api/api";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  // Handles input field changes dynamically by input name
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission asynchronously
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/signup', formData);
      setMessage(res.data.message);  // Show success message from backend
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2 className="mb-4">Signup</h2>
      <Form onSubmit={handleSubmit}>

        {/* Name Input */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Email Input */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Password Input */}
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Sign Up
        </Button>
      </Form>

      {/* Display message below form */}
      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
};

export default Signup;
