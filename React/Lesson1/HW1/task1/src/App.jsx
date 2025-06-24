import './App.css';
import DisplayInfo from './components/Display';


function App() {
  const city = {
    cityName: "Рим",
    country: "Италия",
    year: "753 год до н.э.",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",

  };

  return (
    <div className="App">
      <h1>Городская информация</h1>
      <DisplayInfo city={city} />
    </div>
  );
}

export default App;
