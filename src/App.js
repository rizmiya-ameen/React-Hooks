import './App.css';
import AddCounter from './components/AddCounter';
import FullCounter from './components/FullCounter';
import ToDo from './components/ToDo';
import One from './components/useReducer4';
import Counter from './components/useState';
import useRefOne from './components/useRefOne';

function App() {
  return (
    <div className="App">
      <useRefOne />
      <One />
      <ToDo />
      <Counter />
      <AddCounter />
      <FullCounter />
      
    </div>
  );
}

export default App;
