import { Link } from "react-router-dom";

export default function Herosection(){
    return(
        <div className="h-full text-center flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-transparent ">
            <h1 >WELCOME TO UNIBLOGS</h1>
            <h3>Tell your tale</h3><br/>
            <Link to='/blogs'> <button className="btn">Explore</button></Link>
        </div>
    )
}