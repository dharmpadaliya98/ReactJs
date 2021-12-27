import './App.css';

function App() {
  console.log('Hello from component')
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div className="App">
      <header className="App-header">
        <p> Hello New user {now.toString()}</p>
        <p> {a} + {b} is {a + b} </p>
      </header>
    </div>
  );
}

export default App;
