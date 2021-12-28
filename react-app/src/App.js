import './App.css';
import React, { useState } from 'react'

// const Hello = (props) => {
//   let z = props.arto
//   const { name, age } = props
//   console.log(z)
//   const bornYear = () => new Date().getFullYear() - age
//   return (
//     <div>
//       <p> {props.name} {props.age}</p>
//       {/* <p> Object rendering : {z?.abc.toString()} </p> */}
//       <p>{z.greet()}</p>
//       <p>So you were probably born in {bornYear()}</p>

//     </div>
//   )
// }



function App(props) {
  // console.log('Hello from component')
  // const now = new Date()
  // const a = 10
  // const b = 20
  // let z = {
  //   a: 'a',
  //   abc: ['abcdefg', 'hijklmn']
  // }
  // const arto = {
  //   name: 'Arto Hellas',
  //   age: 35,
  //   education: 'PhD',
  //   greet: function () {
  //     console.log('hello, my name is ' + this.name + 'my age is ' + this.age)
  //   },

  // }

  const [counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    5000
  )

  return (
    <div>
      {/* <header>
        <Hello name="Dp" age='24' arto={arto} />
        <p> Its {now.toString()}</p>
        <p> {a} + {b} is {a + b} </p>
      </header> */}
      {counter}
    </div>
  );


}

export default App;
