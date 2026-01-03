const Greet = ({ name }: { name?: string }) => {
  if (name) return <h1 className="">Hello {name}</h1>;
  return <button>Login</button>;
};

export default Greet;
