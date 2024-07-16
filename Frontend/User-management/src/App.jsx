/** @format */

import "./App.css";
import ShowBtn from "./components/ShowBtn";
import { Outlet } from "react-router-dom";
import Store from "./Store/Store";
function App() {
  return (
    <>
      <Store>
        <ShowBtn />
        <Outlet />
      </Store>
    </>
  );
}

export default App;
