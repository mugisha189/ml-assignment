import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import api from '../context/api';

interface FormData {
  username: string;
  email: string;
  password: string;
  company: string;
  address: string;
}

interface ToastMessage {
  type: 'success' | 'error';
  message: string;
}

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    company: '',
    address: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formData.company) {
      newErrors.company = 'Company is required';
    }
    if (!formData.address) {
      newErrors.address = 'Address is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000); // Hide toast after 5 seconds
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await api.post('/auth/signup', formData);
      
      if (response.status === 200 || response.status === 201) {
        showToast('success', 'Account created successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        showToast('error', response.data?.detail || 'Signup failed. Please try again.');
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      showToast('error', error.response?.data?.detail || 'An error occurred while signing up. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Animation for background dots
  const dotAnimation: Variants = {
    hidden: { opacity: 3, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 overflow-hidden">



      <div className="relative w-full md:w-5/6 container flex items-center justify-center flex-col bg-white py-10 rounded-lg shadow-lg text-black z-[5] ">
        <h2 className="text-2xl font-bold text-center text-[#14ff64d9] mb-6">Welcome to HealthAI</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-3/4 xl:w-[50%] px-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username *
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#14ff64d9] focus:border-[#14ff64d9]"
              placeholder="Username"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#14ff64d9] focus:border-[#14ff64d9]"
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#14ff64d9] focus:border-[#14ff64d9]"
              placeholder="Password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#14ff64d9] focus:border-[#14ff64d9]"
              placeholder="Company"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-500">{errors.company}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#14ff64d9] focus:border-[#14ff64d9]"
              placeholder="Address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-500">{errors.address}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#14ff64d9] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14ff64d9] disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage
