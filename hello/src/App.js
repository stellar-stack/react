import "./App.css";
import Employee from "./components/Employee";

function App() {
  console.log("We are about to log the Employee");
  const showEmployee = false;
  return (
    <div className="App">
      {console.log('Inside the return')}
      {showEmployee ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
