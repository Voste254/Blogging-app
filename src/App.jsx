import { Route, Outlet,Routes } from "react-router-dom";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import Footer from "./Footer";
import { useEffect } from "react";

 function Layout() {
  useEffect(() => {
  console.log("Herosection mounted");
}, []);
 console.log("Render: layout");

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default function App(){
    return (
    <div className="">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Herosection />} />
        <Route path="/blogs" element={<Blogs />} />
      </Route>
    </Routes>
    </div>
  );
}