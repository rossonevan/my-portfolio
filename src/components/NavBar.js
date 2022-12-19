import {Link, NavLink} from 'react-router-dom';


function NavBar () {
    return (
        <div className="p-4 mx-auto max-w-screen-xl sticky top-0">
            <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                <div className="flex lg:w-0 lg:flex-1">
                    <div className='text-4xl font-bold text-center text-red font-style'>
                        <h1 className='text-white'>Evan Rosson</h1>
                        <h4 className='text-white'>Software Engineer</h4>
                    </div>
                    <div className="items-center justify-end flex-1 hidden space-x-8 sm:flex">
                        <a href='#projects' className="inline-block text-white hover:text-blue-500  py-1 px-3">Projects</a>
                        <a href='#about' className="inline-block text-white hover:text-blue-500  py-1 px-3">About Me</a>
                        <a href='#contacts' className="inline-block text-white hover:text-blue-500  py-1 px-3">Contacts</a>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default NavBar;