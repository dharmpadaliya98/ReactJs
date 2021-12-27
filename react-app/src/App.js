import './App.css';

const Hello = (props) => {
  let z = props.course
  console.log(z?.a)
  return (
    <div>
      <p> {props.name} {props.age}</p>
      <p> Object rendering : {z?.abc.toString()} </p>
    </div>
  )

}


function App() {
  console.log('Hello from component')
  const now = new Date()
  const a = 10
  const b = 20
  let z = {
    a: 'a',
    abc: ['abcdefg', 'hijklmn']
  }
  return (
    <div>
      <header>
        <Hello name="Dp" age='24' course={z} />
        <p> Its {now.toString()}</p>
        <p> {a} + {b} is {a + b} </p>
      </header>

    </div>
  );
}

export default App;
