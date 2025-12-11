import React, { createContext, useContext } from "react";


const UserContext = createContext();

export default function App() {
  const user = { name: "Pratham", age: 22 };

  return (
    <UserContext.Provider value={user}>
      <h1>Welcome to App</h1>
      <Child />
    </UserContext.Provider>
  );
}


function Child() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  );
}