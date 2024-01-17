import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureComponent from "./components/ConfigureComp.jsx";

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(enteredNumber) {
    setChosenCount(enteredNumber);
  }


  return (
    <>
      <Header />
      <main>
        <ConfigureComponent onSet={() => handleSetCount(enteredNumber)} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
