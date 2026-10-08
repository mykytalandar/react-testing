import { useState } from 'react';
import './App.css';
import { Users } from './components/Users/Users';

function App() {
  const [value, setValue] = useState('');
  // const [showUsers, setShowUsers] = useState(false);

  return (
    <div className="App">
      <div className='container-test'>
        <h1>Hello, World!</h1>
        <button data-testid='click-btn'>Click</button>
        <input
          type="text"
          placeholder="Type here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <h2 data-testid='value-elem' >{value}</h2>
      </div>

      {/* <button
        data-testid='users-list-btn'
        onClick={() => setShowUsers(!showUsers)}
        className='show-users-button'
      >
        {showUsers ? 'Hide users' : 'Show users'}
      </button> */}

      <Users />

    </div>
  );
}

export default App;
