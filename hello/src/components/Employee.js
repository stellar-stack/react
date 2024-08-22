function Employee(props) {

  return(
  <>
    <h3>Your name is - {props.name}</h3>

    <p>{props.role ? props.role : 'No Role'}</p>
    {props.role ? <p>{props.role}</p>: <p>No Role</p>}
  </>
  );
}

export default Employee;
