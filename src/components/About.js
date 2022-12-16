import resume from '../assets/resume.pdf';


function About () {
    return (
        <>
            <div className="text-white text-center mt-3">
                <h1>I am a full stack developer graduate from Flatiron School. Previously, I graduated from the University of Louisiana at Lafayette with a bachelor's degree in Mechanical Engineering.</h1>
                <br></br>
                <h1>In my free time, I am mostly on the computer. I have always had an interest in computers (how they worked, how they were put together). The most interesting things to me during my mechanical engineering degree were the 3D modeling design classes as well as the Arduino coding we created for a robotics class. I decided it was best to delve into the world of coding and learn the many facets of the tech world that I have always been interested in.</h1> 
                <br></br>
                <h1>At Flatiron School, I have learned Full Stack developer skills including JavaScript, JSX, HTML, CSS, React.js, Ruby and Ruby on Rails, Object-Oriented Programming (OOP). I learned the process of developing web applications from scratch and also working with a team of talented web developers.</h1>
                <br></br>
                <h1>In my career, I hope to utilize my skills learned from my mechanical engineering and software engineering experiences to assist a dynamic company with the best of my abilities to better help my employer and provide the best support for the customer.</h1>
            </div>
            <div className="text-center pb-10 pt-10">
                <h1 className='text-white mb-3'>My Resume</h1>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <a href={resume}>Download</a>
                </button>
            </div>
        </>
    )
}

export default About;