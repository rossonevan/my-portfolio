

const skills = []

const skillsList = skills.map(skill => {
    <li>{skill}</li>
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
                </div>
                <div className="m-6">
                    <h1 className="text-center mb-3">Guitar Heroes</h1>
                    <a href="https://www.loom.com/share/a81b774e25334ce693f07ec5687dd18f">
                        <img className="h-full hover:opacity-80 hover:scale-95 ease-in-out duration-150" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Acoustic_guitars_in_store_20180625.jpg/800px-Acoustic_guitars_in_store_20180625.jpg" alt="guitar heroes" />
                    </a>
                </div>
                <div className="m-6">
                    <h1 className="text-center mb-3">Worth-to-Play</h1>
                    <a href="https://www.loom.com/share/e6db69f9b0564e01814c61e129386b67">
                        <img className="h-full hover:opacity-80 hover:scale-95 ease-in-out duration-150" src="https://pcbuildsonabudget.com/wp-content/uploads/2018/09/free-to-play-gaming.jpg" alt="worth-to-play" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;