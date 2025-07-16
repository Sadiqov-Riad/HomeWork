import './styles/App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { router } from './routes';
import './lib/i18n';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
