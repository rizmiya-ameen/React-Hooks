import './App.css';
import AddCounter from './components/AddCounter';
import FullCounter from './components/FullCounter';
import Counter from './components/useState';

function App() {
  return (
    <div className="App">
      <Counter />
      <AddCounter />
      <FullCounter />
    </div>
  );
}

export default App;
