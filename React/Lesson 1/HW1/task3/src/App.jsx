import './App.css';
import DisplayInfo from './components/Display';

function App() {
  const book = {
    bookName: "Darkly Dreaming Dexter",
    author: "Jeff Lindsay",
    genre: "Detective",
    avatarUrl: "https://prodimage.images-bn.com/pimages/9780307277886_p0_v11_s600x595.jpg",
  };

  return (
    <div className="App">
      <h1>Информация о книге</h1>
      <DisplayInfo book={book} />
    </div>
  );
}

export default App;
