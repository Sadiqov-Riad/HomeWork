import React from 'react';
import SearchForm from './SearchForm';
import SignButton from './SignButton';

const Navbar = ({ setValue }) => {
    return (
        <div className="fixed top-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg z-[1000]">
            <div className="px-10">
                <div className="flex justify-between h-16 items-center">
                    {/* Лого */}
                    <div className="text-2xl font-extrabold tracking-wide hover:scale-105 transition-transform duration-200">
                        <a href="/" className="flex items-center gap-2">
                            🎬 <span>SearchMovie</span>
                        </a>
                    </div>

                    {/* Поиск и кнопки */}
                    <div className="flex items-center gap-4">
                        <SearchForm setValue={setValue} />
                        <SignButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
