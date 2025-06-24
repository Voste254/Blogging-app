import { Link } from "react-router-dom";

export default function Herosection(){
    return(
        <div className="h-screen text-center flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 ">
            <h1 >WELCOME TO UNIBLOGS</h1>
            <h3>Tell your tale</h3><br/>
            <Link to='/'> <button className="btn">Explore</button></Link>
        </div>
    )
}