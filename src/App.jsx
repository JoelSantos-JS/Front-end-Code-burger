import { useState } from "react";
import Login from "./containers/Login";
import Globalstyles from "./styles/globalstyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Globalstyles/>
    <Login/>
  </>
  );
}

export default App;
