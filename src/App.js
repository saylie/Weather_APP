import { Provider } from 'react-redux';
import './App.css';
import WeatherComponent from './Components/Wrap_Components/WeatherComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WeatherComponent/>
      </Provider>
    </div>
  );
}

export default App;
