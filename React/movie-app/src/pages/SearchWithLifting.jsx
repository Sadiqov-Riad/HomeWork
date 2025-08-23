import React, {  useState } from 'react';
import SearchForm from '../components/SearchForm';
import {  useMemo } from 'react';


function SearchWithLifting() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const movieCards = useMemo(() => {
        if (!movies.results || movies.results.length === 0) {
            return (
                <div className="text-center text-slate-500 py-8">
                    {movies.results && movies.results.length === 0 
                        ? "No movies found. Try a different search term." 
                        : "Search for movies to see results here."
                    }
                </div>
            );
        }
        
        return movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ));
    }, [movies]);

    const handleSetMovies = (data) => {
        setIsLoading(false);
        setMovies(data);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Movie Search</h1>
                    <p className="text-gray-600">Discover your favorite movies</p>
                </div>
                
                <div className="flex justify-center mb-8">
                    <SearchForm setValue={handleSetMovies} />
                </div>
                
                {isLoading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="text-lg text-gray-600">Searching for movies...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {movieCards}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchWithLifting;
