import React, { useState } from 'react';
import { FaTimes, FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up:', formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('auth.createAccount')}</h2>
            <p className="text-gray-600">{t('auth.joinUsToday')}</p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <FaGoogle className="w-5 h-5 text-red-500" />
              <span className="font-medium text-gray-700">{t('auth.continueWithGoogle')}</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <FaApple className="w-5 h-5 text-gray-800" />
              <span className="font-medium text-gray-700">{t('auth.continueWithApple')}</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">{t('auth.or')}</span>
            </div>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('auth.firstName')}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('auth.first_name')}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('auth.lastName')}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('auth.last_name')}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder={t('auth.enterEmail')}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.password')}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('auth.createPassword')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                {t('auth.confirmPassword')}
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('auth.confirm_password')}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="flex items-start">
                <input type="checkbox" className="rounded border-gray-300 text-red-500 focus:ring-red-500 mt-1" required />
                <span className="ml-2 text-sm text-gray-600">
                  {t('auth.agreeToTerms')}{' '}
                  <button type="button" className="text-red-500 hover:text-red-600">{t('auth.termsOfService')}</button>
                  {' '}{t('auth.and')}{' '}
                  <button type="button" className="text-red-500 hover:text-red-600">{t('auth.privacyPolicy')}</button>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-xl transition-colors"
            >
              {t('auth.createAccount')}
            </button>
          </form>

          {/* Switch to Sign In */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {t('auth.alreadyHaveAccount')}{' '}
              <button
                onClick={onSwitchToSignIn}
                className="text-red-500 hover:text-red-600 font-medium"
              >
                {t('auth.signIn')}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;