import React, { useRef, useState, useEffect } from 'react';

function SignUpForm({ switchToSignIn }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({ 
        email: '', 
        password: '', 
        confirmPassword: '' 
    });
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatch(false);
            return;
        }
        
        setIsLoading(true);
        
        // Simulate API call delay
        setTimeout(() => {
            console.log('Email:', emailRef.current.value);
            console.log('Password:', passwordRef.current.value);
            console.log('Confirm:', confirmPasswordRef.current.value);
            setIsLoading(false);
        }, 1000);
    }

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        if (field === 'password') {
            calculatePasswordStrength(value);
        }
        
        if (field === 'confirmPassword' || (field === 'password' && formData.confirmPassword)) {
            const password = field === 'password' ? value : formData.password;
            const confirmPassword = field === 'confirmPassword' ? value : formData.confirmPassword;
            setPasswordMatch(password === confirmPassword);
        }
    }

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 1;
        if (password.match(/[0-9]/)) strength += 1;
        if (password.match(/[^a-zA-Z0-9]/)) strength += 1;
        setPasswordStrength(strength);
    }

    const getPasswordStrengthText = () => {
        switch (passwordStrength) {
            case 0:
            case 1: return { text: 'Weak', color: 'text-red-400' };
            case 2: return { text: 'Fair', color: 'text-yellow-400' };
            case 3: return { text: 'Good', color: 'text-blue-400' };
            case 4: return { text: 'Strong', color: 'text-green-400' };
            default: return { text: '', color: '' };
        }
    }

    const getPasswordStrengthWidth = () => {
        return `${(passwordStrength / 4) * 100}%`;
    }

    const isFormValid = formData.email && formData.password && formData.confirmPassword && passwordMatch && passwordStrength >= 2;

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 sm:p-8 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl">
                {/* Header */}
                <div className="text-center mb-2">
                    <h2 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2'>
                        Create Account
                    </h2>
                    <p className="text-slate-400 text-sm">Join us and start your journey</p>
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
                        className="w-full h-12 pl-12 pr-4 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:bg-slate-700/50"
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
                        className="w-full h-12 pl-12 pr-12 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:bg-slate-700/50"
                        disabled={isLoading}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
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

                {/* Password Strength Indicator */}
                {formData.password && (
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-400">Password strength</span>
                            <span className={`text-sm font-medium ${getPasswordStrengthText().color}`}>
                                {getPasswordStrengthText().text}
                            </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                            <div 
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    passwordStrength === 1 ? 'bg-red-500' :
                                    passwordStrength === 2 ? 'bg-yellow-500' :
                                    passwordStrength === 3 ? 'bg-blue-500' :
                                    passwordStrength === 4 ? 'bg-green-500' : 'bg-slate-600'
                                }`}
                                style={{ width: getPasswordStrengthWidth() }}
                            ></div>
                        </div>
                    </div>
                )}

                {/* Confirm Password Input */}
                <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <input 
                        type={showConfirmPassword ? "text" : "password"}
                        ref={confirmPasswordRef} 
                        placeholder="Confirm password" 
                        required 
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className={`w-full h-12 pl-12 pr-12 bg-slate-800/50 backdrop-blur-sm border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-slate-700/50 ${
                            !passwordMatch && formData.confirmPassword 
                                ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' 
                                : 'border-slate-600/50 focus:ring-purple-500/50 focus:border-purple-500/50'
                        }`}
                        disabled={isLoading}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                        disabled={isLoading}
                    >
                        {showConfirmPassword ? (
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

                {/* Password Match Error */}
                {!passwordMatch && formData.confirmPassword && (
                    <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Passwords do not match</span>
                    </div>
                )}

                {/* Password Requirements */}
                <div className="space-y-2">
                    <p className="text-sm text-slate-400">Password requirements:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className={`flex items-center space-x-1 ${formData.password.length >= 8 ? 'text-green-400' : 'text-slate-500'}`}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>8+ characters</span>
                        </div>
                        <div className={`flex items-center space-x-1 ${formData.password.match(/[0-9]/) ? 'text-green-400' : 'text-slate-500'}`}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>One number</span>
                        </div>
                        <div className={`flex items-center space-x-1 ${formData.password.match(/[a-z]/) && formData.password.match(/[A-Z]/) ? 'text-green-400' : 'text-slate-500'}`}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Upper & lower</span>
                        </div>
                        <div className={`flex items-center space-x-1 ${formData.password.match(/[^a-zA-Z0-9]/) ? 'text-green-400' : 'text-slate-500'}`}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Special char</span>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className={`h-12 rounded-xl font-semibold transition-all duration-300 ${
                        !isFormValid || isLoading
                            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95'
                    }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>Creating Account...</span>
                        </div>
                    ) : (
                        'Create Account'
                    )}
                </button>

                {/* Sign In Link */}
                <p className='text-center text-slate-400 text-sm'>
                    Already have an account?
                    <span 
                        onClick={switchToSignIn} 
                        className="ml-2 text-purple-400 cursor-pointer hover:text-purple-300 hover:underline transition-colors duration-200 font-medium"
                    >
                        Sign In
                    </span>
                </p>
            </form>
        </div>
    );
}

export default SignUpForm;