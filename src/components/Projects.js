import { useState } from "react";


function Projects () {

    const [project1Details, setProject1Details] = useState(false);
    const [project2Details, setProject2Details] = useState(false);
    const [project3Details, setProject3Details] = useState(false);



    const skills = ['React.js', 'JavaScript', 'Ruby', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'JSON', 'HTML', 'CSS', 'TailwindCSS', 'JSX', 'RESTful APIs', 'Active Record']
    
    const skillsList = skills.map(skill => {
        return <p>{skill}</p>
    })

    return (
        <div className='text-white'>
            <h1 className="text-center text-xl font-bold">Check Out My Projects!</h1>
            <div className="grid grid-cols-3 gap-1 ml-6 mr-6">
                <div className="m-4">
                    <div className="flow-root">
                        <h1 className="mb-1 text-xl float-left">Cocktail Haven</h1>
                        <div className="text-blue-400 underline float-right flex">
                            <a href="https://github.com/rossonevan/cocktailhaven" className="mr-1">Github</a>
                            <p> | </p>
                            <a href="https://www.loom.com/share/0fd20c7321834f8c88bdc06049bbc2a8" className="ml-1">Demo</a>
                        </div>
                    </div>
                    <img className="h-auto hover:opacity-80 hover:scale-95 ease-in-out duration-150" src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1517521303/180131-wondrich-bad-cocktail-tease_wghhv8" alt="cocktail haven" />
                    <p className="text-center mt-4">A free to play games review application that allows the user to view reviews of free to play games and upload/edit/delete
                    their own reviews to each game.</p>
                    <br></br>
                    <button onClick={() => setProject1Details(!project1Details)} className='mb-2'>Project Details</button>
                    {project1Details ? <p> Formalized vanilla JavaScript code giving the application functionality and user interaction through event listeners. Utilized a public API database that was used to produce six random cocktails on every page load of the application. Designed HTML that provided the layout of the web page. Developed CSS providing the user with easier navigation of the web page.</p>
                    : null}
                </div>
                <div className="m-4">
                    <div className="flow-root">
                        <h1 className="mb-1 text-xl float-left">Guitar Heroes</h1>
                        <div className="text-blue-400 underline float-right flex">
                            <a href="https://github.com/xauvk/guitar-heroes" className="mr-1">Github</a>
                            <p> | </p>
                            <a href="https://www.loom.com/share/a81b774e25334ce693f07ec5687dd18f" className="ml-1">Demo</a>
                        </div>
                    </div>
                    <img className="h-auto hover:opacity-80 hover:scale-95 ease-in-out duration-150" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Acoustic_guitars_in_store_20180625.jpg/800px-Acoustic_guitars_in_store_20180625.jpg" alt="guitar heroes" />
                    <p className="text-center mt-4">A guitar shop application that allows the user to browse guitars, buy guitars, and sell guitars.</p>
                    <br></br>
                    <button onClick={() => setProject2Details(!project2Details)} className='mb-2'>Project Details</button>
                    {project2Details ? <p> Developed the frontend of the web page using React, supplying functionality of the web page. Created different routes for navigation supplying a home page, a selling guitar page, and a checkout cart for the user. Drafted a custom database in JSON that provided information to the user. Designed CSS for better and cleaner navigation for the user.</p>
                    : null}
                </div>
                <div className="m-4">
                    <div className="flow-root">
                        <h1 className="text-center mb-1 text-xl float-left">Worth-to-Play</h1>
                        <div className="text-blue-400 underline float-right flex">
                            <a href="https://github.com/rossonevan/worth-to-play" className="mr-1">Github</a>
                            <p> | </p>
                            <a href="https://www.loom.com/share/e6db69f9b0564e01814c61e129386b67" className="ml-1">Demo</a>
                        </div>
                        <img className="h-auto hover:opacity-80 hover:scale-95 ease-in-out duration-150" src="https://pcbuildsonabudget.com/wp-content/uploads/2018/09/free-to-play-gaming.jpg" alt="worth-to-play" />
                    </div>
                    <p className="text-center mt-4">An application that provides the user with six random cocktails with instructions on how to make them and also allows the user to upload their own cocktails with instructions.</p>
                    <br></br>
                    <button onClick={() => setProject3Details(!project3Details)} className='mb-2'>Project Details</button>
                    {project3Details ? <p> Utilized an external API in JSON through Ruby on Rails, generating a database of information for the web page. Incorporated authorization in order for the user to sign up and login to the application to keep track of their reviews. Crafted the front end using React that utilizes the database and is displayed for and interacted with the user. Designed CSS in order for the user to have easy and clear navigation of the web page.</p>
                    : null}
                </div>
            </div>
            <br></br>
            <div className="mt-36 text-center">
                <h1 className="text-xl font-bold underline">Technical Skills</h1>
                {skillsList}
            </div>
        </div>
    )
}

export default Projects;