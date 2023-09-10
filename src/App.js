import logo from './logo.svg';
import './App.css';
import Mainsection from './page/Mainsection';
import { Provider } from './context/NoteContext';

function App() {
  return (
    <Provider>
      <div className="app">
        <Mainsection />
      </div>
    </Provider>
  );
}

export default App;
