import './App.css';
import MovieCard from './components/MovieCard';
import poster from './assets/poster.png';

function App() {
  return (
    <>
      <h1>My favorite movie</h1>
      <div className="app-container">
        <MovieCard
          title="The Truman Show"
          director="Peter Weir"
          year="1998"
          studio="Scott Rudin Productions"
          posterUrl={poster}
        />
      </div>
    </>
  );
}

export default App;
