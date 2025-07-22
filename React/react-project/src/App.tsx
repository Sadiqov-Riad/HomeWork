import './styles/App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { router } from './routes';
import './lib/i18n';
import { ThemeProvider } from './components/shared/theme-provider';

/**
 * Корневой компонент приложения, включает провайдеры темы, Redux и роутер
 * @returns {JSX.Element}
 */
function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
