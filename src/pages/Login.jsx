import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password }
      );

      console.log("Login Success:", res.data);

      // Store token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");
      nav('/')

      // Optional: redirect
      // window.location.href = "/dashboard";

    } catch (err) {
      console.log("Login Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4">
            <Lock className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-gray-500 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                className="w-full pl-10 pr-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <button type="button" className="text-blue-600 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400 text-sm">
          OR
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="border p-2 rounded-lg hover:bg-gray-100">
            Google
          </button>
          <button className="border p-2 rounded-lg hover:bg-gray-100">
            GitHub
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{' '}
          <span onClick={()=>nav('/register')} className="text-blue-600 cursor-pointer">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}