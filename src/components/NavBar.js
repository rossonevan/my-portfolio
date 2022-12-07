import {Link, NavLink} from 'react-router-dom';


function NavBar () {
    return (
        <div className="p-4 mx-auto max-w-screen-xl sticky top-0">
            <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                <div className="flex lg:w-0 lg:flex-1">
                    <Link to='/' className='text-4xl font-bold text-center text-red font-style'>
                        <h1 className='text-white'>Home</h1>
                    </Link>
                    <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                        <NavLink exact to='/projects' activeClassName='bg-red-900' className="inline-block hover:border-gray-200 rounded text-white hover:text-black hover:bg-red-600 py-1 px-3">Projects</NavLink>
                        <NavLink exact to='/me' activeClassName='bg-red-900' className="inline-block hover:border-gray-200 rounded text-white hover:text-black hover:bg-red-600 py-1 px-3">About Me</NavLink>
                        <NavLink exact to='/contacts' activeClassName='bg-red-900' className="inline-block hover:border-gray-200 rounded text-white hover:text-black hover:bg-red-600 py-1 px-3">Contacts</NavLink>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default NavBar;