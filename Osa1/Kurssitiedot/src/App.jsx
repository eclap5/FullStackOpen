const Header = (props) => (
    <h1> {props.title} </h1>    
)

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
)

const Content = (props) => { 
  return (
    <div>
      <Part part={props.name1} exercises={props.ex1} />
      <Part part={props.name2} exercises={props.ex2} />
      <Part part={props.name3} exercises={props.ex3} />
    </div>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.amount1 + props.amount2 + props.amount3} </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content name1={part1} ex1={exercises1} name2={part2} ex2={exercises2} name3={part3} ex3={exercises3} />
      <Total amount1={exercises1} amount2={exercises2} amount3={exercises3} />
    </div>
  )
}

export default App