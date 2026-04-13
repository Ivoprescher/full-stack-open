const Header = (props) => {
  return <h1>{props.curso}</h1>;
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.parte1}: {props.ejercicios1}
      </p>
      <p>
        {props.parte2}: {props.ejercicios2}
      </p>
      <p>
        {props.parte3}: {props.ejercicios3}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Total de ejercicios{" "}
      {props.ejercicios1 + props.ejercicios2 + props.ejercicios3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header curso={course} />
      <Content
        parte1={part1}
        ejercicios1={exercises1}
        parte2={part2}
        ejercicios2={exercises2}
        parte3={part3}
        ejercicios3={exercises3}
      />
      <Total
        ejercicios1={exercises1}
        ejercicios2={exercises2}
        ejercicios3={exercises3}
      />
    </>
  );
};

export default App;
