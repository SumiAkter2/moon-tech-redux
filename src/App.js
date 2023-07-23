
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import store from './Redux/Store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
