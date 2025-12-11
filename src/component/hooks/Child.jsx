import { useContext } from "react";
import { MyContext } from "./Parent";

function ChildComponent() {
  const user = useContext(MyContext);

  return (
    <div>
      <h2>User Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  );
}