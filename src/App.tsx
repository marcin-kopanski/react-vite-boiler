import './App.css';

import { useState } from 'react';

import { Header } from './components/Header/Header';
import { ReadTheDocs } from './components/ReadTheDocs/ReadTheDocs';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <ReadTheDocs />
    </div>
  );
};
