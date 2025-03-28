import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../context/api';
import axios from 'axios';

interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string>('');

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password || formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setApiError('');

    try {
      const response = await api.post('/auth/login', formData);
      const { access, refresh } = response.data;
      
      // Get user data using the new access token
      const userResponse = await api.get('/user/me', {
        headers: { Authorization: `Bearer ${access}` }
      });

      await login({ access, refresh }, userResponse.data);
      navigate('/map');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.detail || error.response?.data?.message || error.message;
        setApiError(errorMessage);
      } else {
        setApiError('An unexpected error occurred');
      }
      console.error('Login error:', error);
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
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    setApiError('');
  };


  return (
    <div className="relative flex items-center justify-center min-h-screen  overflow-hidden">

      <div className="relative w-full md:w-5/6 container flex items-center justify-center flex-col bg-white py-10 rounded-lg shadow-lg text-black z-[5] ">
        <h2 className="text-2xl font-bold text-center text-[#14ff64d9] mb-6">Welcome to HealthAI</h2>
        
        {apiError && (
          <div className="mb-4 w-full md:w-3/4 xl:w-[50%] px-4">
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {apiError}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-3/4 xl:w-[50%] px-4">
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#14ff64d9] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14ff64d9] disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6">
          <p className="text-gray-600">
            Don't have an account?
            <a href="/signup" className="ml-4 text-[#14ff64d9] hover:text-[#14ff64d9]">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
