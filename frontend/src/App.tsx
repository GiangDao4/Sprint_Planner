import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch('/api/ping')
      .then((res) => res.json())
      .then((json) => setMsg(json.message))
      .catch((err) => setMsg('Error: ' + err.message));
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        Backend: {msg}
      </div>
    </>
  );
}

export default App;
