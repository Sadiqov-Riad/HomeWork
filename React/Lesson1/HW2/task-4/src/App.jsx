import './App.css';
import RenderPetInfo from './components/RenderPetInfo';

function App() {
  return (
    <RenderPetInfo
      photo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnAdZ5GDlzfvVtjriMv15tGE2CL3iamU-EQvE9ndFNNJ_JA68V7bibawLlfcH1DDX4oY&usqp=CAU'
      name='Doctor ZLO'
      type='Raccoon'
      age='8'
    />
  );
}

export default App;