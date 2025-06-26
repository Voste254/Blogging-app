import {Link, Outlet} from 'react-router-dom'

export default function Navbar(){
     console.log("Render: navbar");
return(
        <div className='h-screen'>
        <div className='h-16 bg-gray-800'>
            <ul className='flex h-full justify-center gap-10 items-center text-white font-bold'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/blogs'><li>Blogs</li></Link>
            <Link to='/posts'><li>My posts</li></Link>
             
            </ul>
        </div>
        <Outlet/>
    </div>

)
}