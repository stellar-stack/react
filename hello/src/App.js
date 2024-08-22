import "./index.css";
import Employee from "./components/Employee";
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const [name, setName] = useState('');
  // let role = 'dev';
  const showEmployee = true;
  return (
    <div className="App bg-red-300" >
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          ></input>
          <input
            type="text" placeholder="name"
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          ></input>
          <Employee name={name} role="Intern" />
          <Employee name="Abbey" role={role} />
          <Employee name="john" />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
