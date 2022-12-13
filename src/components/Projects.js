

const skills = ['React.js', 'JavaScript', 'Ruby', 'Ruby on Rails', 'SQL', 'PostgreSQL', 'JSON', 'HTML', 'CSS', 'TailwindCSS', 'JSX', 'APIs']

const skillsList = skills.map(skill => {
    return <p>{skill}</p>
})

function Projects () {
    return (
        <div className='text-white'>
            <h1 className="text-center text-xl font-bold">Check Out My Projects!</h1>
            <div className="grid grid-cols-3 gap-1 ml-6 mr-6">
                <div className="m-6">
                    <h1 className="text-center mb-3">Cocktail Haven</h1>
                    <a href="https://www.loom.com/share/0fd20c7321834f8c88bdc06049bbc2a8">
                        <img className="h-full hover:opacity-80 hover:scale-95 ease-in-out duration-150" src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1517521303/180131-wondrich-bad-cocktail-tease_wghhv8" alt="cocktail haven" />
                    </a>
                    <p className="text-center">Project Description: </p>
                    <p className="text-center">A free to play games review application that allows the user to view reviews of free to play games and upload/edit/delete
                    their own reviews to each game.</p>
                </div>
                <div className="m-6">
                    <h1 className="text-center mb-3">Guitar Heroes</h1>
                    <a href="https://www.loom.com/share/a81b774e25334ce693f07ec5687dd18f">
                        <img className="h-full hover:opacity-80 hover:scale-95 ease-in-out duration-150" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Acoustic_guitars_in_store_20180625.jpg/800px-Acoustic_guitars_in_store_20180625.jpg" alt="guitar heroes" />
                    </a>
                    <p className="text-center">Project Description: </p>
                    <p className="text-center">A guitar shop application that allows the user to browse guitars, buy guitars, and sell guitars.</p>
                </div>
                <div className="m-6">
                    <h1 className="text-center mb-3">Worth-to-Play</h1>
                    <a href="https://www.loom.com/share/e6db69f9b0564e01814c61e129386b67">
                        <img className="h-full hover:opacity-80 hover:scale-95 ease-in-out duration-150" src="https://pcbuildsonabudget.com/wp-content/uploads/2018/09/free-to-play-gaming.jpg" alt="worth-to-play" />
                    </a>
                    <p className="text-center">Project Description: </p>
                    <p className="text-center">An application that provides the user with six random cocktails with instructions on how to make them and also allows the
user to upload their own cocktails with instructions.</p>
                </div>
            </div>
            <br></br>
            <div className="mt-36 text-center">
                <h1 className="text-xl font-bold underline">Technical Skills</h1>
                <p>{skillsList}</p>
            </div>
        </div>
    )
}

export default Projects;