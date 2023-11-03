import './App.css';
import AddCounter from './components/AddCounter';
import FullCounter from './components/FullCounter';
import ToDo from './components/ToDo';
import Counter from './components/useState';

function App() {
  return (
    <div className="App">
      <ToDo />
      <Counter />
      <AddCounter />
      <FullCounter />
      
    </div>
  );
}

export default App;
