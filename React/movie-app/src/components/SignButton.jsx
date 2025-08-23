import React, { useEffect, useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

function SignButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [signPage, setSignPage] = useState('signin');
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleModal = () => {
        if (isOpen) {
            setIsAnimating(false);
            setTimeout(() => setIsOpen(false), 200); // Wait for animation to complete
        } else {
            setIsOpen(true);
            setTimeout(() => setIsAnimating(true), 10); // Small delay for smooth entrance
        }
    };

    const closeModal = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsOpen(false);
            setSignPage('signin');
        }, 200);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    const switchToSignUp = () => {
        setSignPage('signup');
    };

    const switchToSignIn = () => {
        setSignPage('signin');
    };

    return (
        <>
            {/* Sign Button */}
            <button 
                onClick={toggleModal} 
                className='group relative p-2 bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm text-slate-300 hover:text-white border border-slate-600/50 hover:border-blue-500/50 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95'
                aria-label="Sign in or Sign up"
            >
                <div className="relative">
                    {/* User Icon */}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    
                    {/* Hover effect ring */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    Sign In / Sign Up
                </div>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div 
                    className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] transition-opacity duration-200 ${
                        isAnimating ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={closeModal}
                >
                    {/* Modal Content */}
                    <div 
                        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto transition-all duration-300 ${
                            isAnimating 
                                ? 'opacity-100 scale-100 translate-y-0' 
                                : 'opacity-0 scale-95 translate-y-4'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={closeModal} 
                            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-slate-800/90 backdrop-blur-sm hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600/50 hover:border-red-500/50 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 group flex items-center justify-center"
                            aria-label="Close modal"
                        >
                            <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Form Container - Simple Switch */}
                        <div className="w-full">
                            {signPage === 'signin' ? (
                                <SignInForm switchToSignUp={switchToSignUp} />
                            ) : (
                                <SignUpForm switchToSignIn={switchToSignIn} />
                            )}
                        </div>

                        {/* Background Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl -z-10 blur-xl"></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignButton;