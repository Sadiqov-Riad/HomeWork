import './App.css';
import RenderDossierInfo from './components/RenderDossierInfo';

function App() {
  return (
    <RenderDossierInfo 
      photo="https://pyxis.nymag.com/v1/imgs/ca1/0b8/518f740fc17d526df116a32da661e6af51-27-dexter-greenshirt-2.rsquare.w330.jpg"
      fullName="Dexter Morgan"
      age="35"
      city="Miami"
      work="Miami Metro Police"
      email="sadiqovriad2@gmail.com"
      phone="+994 70 215 67 67"
    />
  );
}

export default App;
