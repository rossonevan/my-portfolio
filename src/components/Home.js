import earth from '../assets/earth.mp4';

function Home () {
    return (
        <div>
            {/* <div className='overlay'></div> */}
            <div className="text-white text-center"> 
                <video className='home-video' src={earth} autoPlay loop muted/>
                <h1 className=''>Hi my name is Evan Rosson. I am a Software Engineer specializing in web development and this is my Portfolio. I hope you enjoy my applications!</h1> 
            </div>
        </div>
    )
}

export default Home;