import './App.css';
import AddCounter from './components/AddCounter';
import FullCounter from './components/FullCounter';
import ToDo from './components/ToDo';
import One from './components/useReducer4';
import Counter from './components/useState';

function App() {
  return (
    <div className="App">
      <One />
      <ToDo />
      <Counter />
      <AddCounter />
      <FullCounter />
      
    </div>
  );
}

export default App;
