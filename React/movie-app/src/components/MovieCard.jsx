import React from 'react';

function MovieCard({ movies }) {
    return (
        <div className='pt-15 px-10 flex flex-row flex-wrap gap-5 justify-center'>
            {movies.results ? movies.results.map(m =>
                <div key={m.id} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full max-w-sm mx-auto sm:max-w-md lg:max-w-lg">
                    <div className="relative h-48 sm:h-56 lg:h-80 m-2.5 overflow-hidden text-white rounded-md">
                        {m.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                                alt={m.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className='text-black w-full h-full flex justify-center items-center bg-stone-200 rounded-md'>
                                <div className="text-center">
                                    <div className="text-4xl mb-2">📽️</div>
                                    <div className="text-sm font-medium">NO PHOTO</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col flex-1 p-4">
                        <div className="flex-1">
                            <h6 className="mb-2 text-slate-800 text-lg sm:text-xl font-semibold line-clamp-2">
                                {m.title}
                            </h6>
                            <p className="text-slate-600 leading-normal font-light text-sm sm:text-base line-clamp-3 mb-3">
                                {m.overview || 'No description available.'}
                            </p>
                            <div className="flex items-center text-sm text-slate-500">
                                <span className="mr-4">
                                    ⭐ {m.vote_average ? m.vote_average.toFixed(1) : 'N/A'}/10
                                </span>
                                <span>
                                    {m.release_date ? new Date(m.release_date).getFullYear() : 'TBA'}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button 
                                className="w-full sm:w-auto rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
                                type="button"
                            >
                                Watch Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center text-center h-[50vh] text-xl text-slate-600'>
                    <div className="text-6xl mb-4">🎬</div>
                    <h3 className="text-2xl font-semibold mb-2">No Movies Found</h3>
                    <p className="text-slate-500">Search for movies to see results here</p>
                </div>
            )}
        </div>
    );
}

export default MovieCard;