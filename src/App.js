import './App.css';
import AddCounter from './components/useReducer/AddCounter';
import FullCounter from './components/useReducer/FullCounter';
import ToDo from './components/useReducer/ToDo';
import One from './components/useReducer/useReducer4';
import Counter from './components/useState';
import RefOne from './components/useRef/useRef2';
import RefTwo from './components/useRef/useRef2';
import RefThree from './components/useRef/useRef3';
import RefFour from './components/useRef/useRef4';
import EffectOne from './components/useEffect/One';
import EffectTwo from './components/useEffect/Two';
import EffectThree from './components/useEffect/Three';
import MemoTwo from './components/useMemo/MemoTwo';
import MemoFour from './components/useMemo/MemoFour';
//import BackOne from './components/useCallback/BackOne';
//import BackTwo from './components/useCallback/BackTwo';
import BackThree from './components/useCallback/BackThree';
import BackFour from './components/useCallback/BackFour';
//import MemoThree from './components/useMemo/MemoThree';
//import MemoOne from './components/useMemo/MemoOne';

function App() {
  return (
    <div className="App">
      {/*
      <BackOne />
      <BackTwo />
      <BackThree />
      */}
      
      <BackFour />

      <MemoFour />
      {/*<MemoThree />*/}
      <MemoTwo />
      {/*<MemoOne />*/}
      {/*<EffectThree />*/}
      <EffectTwo />
      <EffectOne />
      
      <RefFour />
      <RefThree />
      <RefTwo />
      <RefOne />

      <One />
      <ToDo />
      <AddCounter />
      <FullCounter />

      

      <Counter />
    </div>
  );
}

export default App;
