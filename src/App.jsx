import { Route, Outlet,Routes } from "react-router-dom";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import Footer from "./Footer";

//  function Layout() {
//   return (
//     <>
      
  
//         <Outlet />
     
//       <Footer />
//     </>
//   );
// }

export default function App(){
    return (
    <div className="">
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Herosection />} />
        <Route path="/blogs" element={<Blogs />} />
      </Route>
    </Routes>
    </div>
  );
}