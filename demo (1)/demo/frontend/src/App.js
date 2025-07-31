import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("/api/health")
        .then(res => res.json())
        .then(data => setStatus(`Status: ${data.status}, DB: ${data.db}`))
        .catch(err => setStatus("Failed to connect"));
  }, []);

  return <h1>{status}</h1>;
}

export default App;
