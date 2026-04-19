function Header({ recieveChildData }) {
  let username = "Rajkumar";
  let age = 23;
  recieveChildData(username, age);
  return (
    <>
      <h1>{username}</h1>
    </>
  );
}
export default Header;
