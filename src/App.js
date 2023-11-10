import './App.css';
import AddCounter from './components/AddCounter';
import FullCounter from './components/FullCounter';
import ToDo from './components/ToDo';
import One from './components/useReducer4';
import Counter from './components/useState';
import RefOne from './components/useRef1';
import RefTwo from './components/useRef2';
import RefThree from './components/useRef3';
import RefFour from './components/useRef4';
import EffectOne from './components/useEffect/One';
import EffectTwo from './components/useEffect/Two';
import EffectThree from './components/useEffect/Three';
import MemoTwo from './components/useMemo/MemoTwo';
import MemoFour from './components/useMemo/MemoFour';
//import MemoThree from './components/useMemo/MemoThree';
//import MemoOne from './components/useMemo/MemoOne';

function App() {
  return (
    <div className="App">
      <MemoFour />
      {/*<MemoThree />*/}
      <MemoTwo />
      {/*<MemoOne />*/}
      <EffectThree />
      <EffectTwo />
      <EffectOne />
      <RefFour />
      <RefThree />
      <RefTwo />
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
