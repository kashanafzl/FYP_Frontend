import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import bg from '../../assets/Img/back.jpg'; // Update the path to your background image
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for show/hide

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log({ email, password });
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }} // Set background image
    >
      <div className="bg-white font-montserrat rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl text-lightgraycolor font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle input type
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Show/hide icon */}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-lightgraycolor text-white rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <span 
              onClick={handleSignupClick} 
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
