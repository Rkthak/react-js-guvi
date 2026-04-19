import Header from "./components/Header";
function App() {
  let username = "Rajkumar";
  {
    /* parent to child communicate using props and attributes passing in child */
  }
  return (
    <>
      <Header username={username} /> {/* child */}
    </>
  );
}

export default App;
