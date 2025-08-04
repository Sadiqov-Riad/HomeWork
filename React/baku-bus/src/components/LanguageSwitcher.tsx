import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
    { code: 'az', name: 'AZ', flag: '🇦🇿' },
  ] as const;

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative group">
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none bg-transparent border border-neutral-300 rounded-full px-3 py-1.5 pr-6 text-xs font-medium text-neutral-700 cursor-pointer hover:border-red-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ease-in-out backdrop-blur bg-white/30 w-20 hover:scale-105 hover:shadow-lg transform"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-white text-neutral-700">
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:rotate-180">
        <svg className="w-2.5 h-2.5 text-neutral-400 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 