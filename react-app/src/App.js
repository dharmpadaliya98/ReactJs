import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} {props.age}</p>
    </div>
  )
}

function App() {
  console.log('Hello from component')
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <header>
        <Hello name="Dp" age='24' />
        <p> Hello New user {now.toString()}</p>
        <p> {a} + {b} is {a + b} </p>
      </header>
    </div>
  );
}

export default App;
