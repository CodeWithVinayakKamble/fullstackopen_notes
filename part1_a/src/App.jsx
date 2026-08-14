const Hello = (prop) => {
  return (
    <div>
      <p>Hello,{prop.name} ! Welcome To React World !!!</p>
      <p>User {prop.name}, your Age is {prop.age}</p>
    </div>
  )
};

const App = () => {

  let date = new Date();

  let a = 10;
  let b = 20;

  let name = "Vinayak";
  let age = 23;

  return (
    <div>
      <h1>Hello World ! @ React With Vite Setup</h1>
      <hr />
      <h2>Today I Have Started React App Dated : {date.toLocaleDateString()}</h2>
      <hr />
      <div>
        <h3>Basic Maths Operation</h3>
        <p>{a} + {b} = {a + b}</p>
      </div>
      <hr />
      <h3>Function Component With Prop (param)</h3>
      <Hello name={name} age={age} />
      <Hello name="Varoon" age={24} />
      <hr />
    </div>
  )
}

export default App