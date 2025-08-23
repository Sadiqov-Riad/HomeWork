import React, { useRef, useState } from 'react';

function SignInForm({ switchToSignUp }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
            console.log("Email: ", emailRef.current.value);
            console.log("Password: ", passwordRef.current.value);
            setIsLoading(false);
        }, 1000);
    }

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const isFormValid = formData.email && formData.password;

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 sm:p-8 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl">
                {/* Header */}
                <div className="text-center mb-2">
                    <h2 className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2'>
                        Welcome Back
                    </h2>
                    <p className="text-slate-400 text-sm">Sign in to your account</p>
                </div>

                {/* Email Input */}
                <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                    </div>
                    <input 
                        type="email" 
                        ref={emailRef} 
                        placeholder="Email address" 
                        required 
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full h-12 pl-12 pr-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50"
                        disabled={isLoading}
                    />
                </div>

                {/* Password Input */}
                <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <input 
                        type={showPassword ? "text" : "password"}
                        ref={passwordRef} 
                        placeholder="Password" 
                        required 
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full h-12 pl-12 pr-12 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50"
                        disabled={isLoading}
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                        disabled={isLoading}
                    >
                        {showPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                    <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        Forgot password?
                    </a>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className={`h-12 rounded-xl font-semibold transition-all duration-300 ${
                        !isFormValid || isLoading
                            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95'
                    }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>Signing In...</span>
                        </div>
                    ) : (
                        'Sign In'
                    )}
                </button>

                {/* Sign Up Link */}
                <p className='text-center text-slate-400 text-sm'>
                    Don't have an account?
                    <span 
                        onClick={switchToSignUp} 
                        className="ml-2 text-blue-400 cursor-pointer hover:text-blue-300 hover:underline transition-colors duration-200 font-medium"
                    >
                        Sign Up
                    </span>
                </p>

                {/* Social Login Divider */}
                <div className="relative my-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-slate-900/80 text-slate-400">Or continue with</span>
                    </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button 
                        type="button" 
                        className="flex items-center justify-center h-10 px-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 rounded-lg text-white transition-all duration-300 hover:scale-105"
                        disabled={isLoading}
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                    </button>
                    <button 
                        type="button" 
                        className="flex items-center justify-center h-10 px-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 rounded-lg text-white transition-all duration-300 hover:scale-105"
                        disabled={isLoading}
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;