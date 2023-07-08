import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TesingPage from './TestingPage';

function App() {
  return (
    <Provider store={store}>
      <TesingPage/>
    </Provider>
  );
}

export default App;
