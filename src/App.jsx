import Header from "./components/Header";
function App() {
  // get data from child using carrier function in parent and passing as props to the child

  const recieveChildData = (name, age) => {
    console.log(`hello ${name}! you are ${age} years old`);
  };

  return (
    <>
      <Header recieveChildData={recieveChildData} /> {/* child */}
    </>
  );
}

export default App;
