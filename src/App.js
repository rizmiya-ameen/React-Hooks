import './App.css';
import AddCounter from './components/AddCounter';
import FullCounter from './components/FullCounter';
import ToDo from './components/ToDo';
import One from './components/useReducer4';
import Counter from './components/useState';
import RefOne from './components/useRef1';

function App() {
  return (
    <div className="App">
      <One />
      <ToDo />
      <Counter />
      <AddCounter />
      <FullCounter />
      <RefOne />
    </div>
  );
}

export default App;
