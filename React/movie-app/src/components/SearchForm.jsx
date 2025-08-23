import { useRef, useState } from "react";
import { fetchMovies } from "../services/fetchService";

function SearchForm({setValue}) {
    const searchInput = useRef();
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        
        setIsLoading(true);
        try {
            const res = await fetchMovies(searchInput.current.value);
            setValue(res);
        } catch (error) {
            console.error('Search failed:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const clearSearch = () => {
        setInputValue('');
        searchInput.current.value = '';
        searchInput.current.focus();
    }
   
    return (
        <div className="relative">
            <form onSubmit={handleSubmit} className="flex items-center group">
                <div className="relative flex-1">
                    {/* Search Icon */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors duration-200">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    
                    <input 
                        onChange={handleChange} 
                        className='w-80 h-12 pl-12 pr-12 rounded-l-xl bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50' 
                        ref={searchInput} 
                        placeholder='Search for movies...' 
                        type='search' 
                        name="movie-name" 
                        id="movie-name"
                        disabled={isLoading}
                    />
                    
                    {/* Clear Button */}
                    {inputValue && (
                        <button
                            type="button"
                            onClick={clearSearch}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
                
                <button 
                    disabled={!inputValue.trim() || isLoading}  
                    className={`h-12 px-6 rounded-r-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold border border-l-0 border-slate-600/50 transition-all duration-300 ${
                        !inputValue.trim() || isLoading 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95'
                    }`} 
                    type='submit'
                >
                    {isLoading ? (
                        <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>Searching...</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Search</span>
                        </div>
                    )}
                </button>
            </form>
        </div>
    )
};

export default SearchForm;