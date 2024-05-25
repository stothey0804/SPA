import { useState } from 'react'  
import './App.css'
import TestComponent from './components/TestComponent';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Error Boundary Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ErrorBoundary>
          <TestComponent />
        </ErrorBoundary>
      </div>
    </>
  )
}

export default App
