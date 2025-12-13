import React, { useState } from 'react';

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));


//         // Clear erroe when user starts typing
//         if (errors[name]) {
//             setErrors(prev => ({ ...prev, [name]: '' }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.username.trim()) {
//             newErrors.username = 'Username is required';
//         }

//         if (!formData.email.trim()) {
//             newErrors.email = 'Email is required';
//         } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//             newErrors.email = 'Please enter a valid email address';
//         }

//         if (!formData.password) {
//             newErrors.password = 'Password is required';
//         } else if (formData.password.length < 6) {
//             newErrors.password = 'Password must be at least 6 characters long';
//         }

//         return newErrors;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const validationErrors = validateForm();

//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         setIsSubmitting(true);

//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         console.log('Registration successful:', formData);
//         alert('Account created successfully!');

//         // Reset Form
//         setFormData({ username: '', email: '', password: '' });
//         setErrors({});
//         setIsSubmitting(false);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//             <div className="w-full max-w-md">
//                 <div className="bg-white rounded-2xl shadow-xl p-8">
//                     {/* Header */}
//                     <div className="text-center mb-8">
//                         <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
//                         <p className="text-gray-600 mt-2">Join us today! It's free and quick.</p>
//                     </div>

//                     {/* Form */}
//                     <form onSubmit={handleSubmit} noValidate className="space-y-6">
//                         {/* Username Field */}
//                         <div>
//                             <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
//                                 Username
//                             </label>
//                             <input 
//                                 type="text" 
//                                 id="username"
//                                 name="username"
//                                 value={formData.username}
//                                 onChange={handleChange}
//                                 className={`w-full px-4 py-3 rounded-lg border ${
//                                     errors.username
//                                         ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
//                                         : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
//                                     } focus:ring-2 focus:outline-none transition-colors`}
//                                 placeholder="believille123"
//                             />
//                             {errors.username && (
//                                 <p className="mt-2 text-sm text-red-600 flex items-center">
//                                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                         <path  fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 
//                                         16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 
//                                         1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 
//                                         1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 
//                                         8.586 8.707 7.293z" clipRule="evenodd"/>
//                                     </svg>
//                                     {errors.username}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Email Field */}
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                                 Email Address
//                             </label>
//                             <input 
//                                 type="email" 
//                                 id="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className={`w-full px-4 py-3 rounded-lg border ${
//                                     errors.username
//                                         ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
//                                         : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
//                                     } focus:ring-2 focus:outline-none transition-colors`}
//                                 placeholder="believille@example.com"
//                             />
//                             {errors.email && (
//                                 <p className="mt-2 text-sm text-red-600 flex items-center">
//                                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                         <path  fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 
//                                         16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 
//                                         1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 
//                                         1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 
//                                         8.586 8.707 7.293z" clipRule="evenodd"/>
//                                     </svg>
//                                     {errors.email}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Password Field */}
//                         <div>
//                             <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
//                                 Username
//                             </label>
//                             <input 
//                                 type="password" 
//                                 id="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className={`w-full px-4 py-3 rounded-lg border ${
//                                     errors.username
//                                         ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
//                                         : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
//                                     } focus:ring-2 focus:outline-none transition-colors`}
//                                 placeholder="********"
//                             />
//                             {errors.password && (
//                                 <p className="mt-2 text-sm text-red-600 flex items-center">
//                                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                         <path  fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 
//                                         16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 
//                                         1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 
//                                         1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 
//                                         8.586 8.707 7.293z" clipRule="evenodd"/>
//                                     </svg>
//                                     {errors.password}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type='submit'
//                             disabled={isSubmitting}
//                             className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all transform ${
//                                 isSubmitting
//                                     ? 'bg-indigo-400 cursor-not-allowed'
//                                     : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg active:scale-95'
//                             }`}
//                         >
//                             {isSubmitting ? (
//                                 <span className="flex items-center justify-center">
//                                     <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                                     </svg>
//                                     Creating Account...
//                                 </span>
//                             ) : (
//                                 'Create Account'
//                             )}
//                         </button>
//                     </form>

//                     {/* Footer */}
//                     <p className="mt-8 text-center text-sm text-gray-600">
//                         Already have an account?{' '}
//                         <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                             Sign in here
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };



// src/components/RegistrationForm.jsx

const RegistrationForm = () => {
    // Individual state variables — this ensures the exact strings exist
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required'

        if (email && !/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (password && password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        await new Promise(r => setTimeout(r, 1000));
        console.log('Success:', { username, email, password });
        alert('Registered successfully!');
        
        setUsername('');
        setEmail('');
        setPassword('');
        setErrors({});
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                        <p className="text-gray-600 mt-2">Fill in your details to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                value={username}           
                                onChange={(e) => setUsername(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                placeholder="believille123"
                            />
                            {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}  
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                placeholder="believille@example.com"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}           
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                placeholder="********"
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition disabled:bg-indigo-400"
                        >
                            {isSubmitting ? 'Creating Account...' : 'Register'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default RegistrationForm