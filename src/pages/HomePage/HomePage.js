const HomePage = ({ authenticate, logOut, isAuthenticated }) => {
  return (
    <div>
      <h1>Log in Page!</h1>
      {isAuthenticated ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={authenticate}>Authenticate</button>
      )}
    </div>
  );
};

export default HomePage;
