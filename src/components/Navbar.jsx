import {Link, Outlet} from 'react-router-dom'

export default function Navbar(){
return(
        <>
        <div className='h-16 bg-red-200'>
            <ul className='flex justify-center gap-10 items-center'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/blogs'><li>Blogs</li></Link>
            <Link to='/posts'><li>My posts</li></Link>
             
            </ul>
        </div>
        <Outlet/>
    </>

)
}