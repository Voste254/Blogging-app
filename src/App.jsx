import { Route, Routes } from "react-router-dom";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

export default function App(){
    return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Navbar/>}>
          <Route index element={<Herosection/>}/>
        </Route>
      </Routes>
    </div>
  );
}