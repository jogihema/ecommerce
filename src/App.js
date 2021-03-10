import MiniDrawer from './components/NavBar/MiniDrawer';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
          <MiniDrawer />
      </div>
    </Provider>
  );
}

export default App;
