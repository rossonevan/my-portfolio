import earth from '../assets/earth.mp4';

function Home () {
    return (
        <div>
            {/* <div className='overlay'></div> */}
            <video src={earth} autoPlay loop muted/>
            <div className="text-white"> 
                <h1>Hi my name is Evan Rosson. I am a Software Engineer specializing in web development and this is my Portfolio. I hope you enjoy my applications!</h1> 
            </div>
        </div>
    )
}

export default Home;