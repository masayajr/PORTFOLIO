import '../App.css'

import Self  from '../assets/Snapchat-411872927-2.jpg'

function About () {
    
    return (
 <section id='about' className='py-24 px-6 bg-slate-900'>
      <div className='max-w-6xl mx-auto'>  
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-white">About Me</h2>
            <p className="mb-4 text-slate-300">
              I'm a full stack developer with 5+ years of experience building web applications that users love. 
              I specialize in React, Node.js, and modern cloud technologies.
            </p>
            <p className="mb-4 text-slate-300">
              My approach combines technical expertise with a keen eye for design, ensuring that every project 
              I work on is not only functional but also intuitive and visually appealing.
            </p>
            <p className="text-slate-300">
              When I'm not coding, you'll find me contributing to open source projects, writing technical articles, 
              or exploring the latest web technologies.
            </p>
          </div>

                    <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-20 blur-2xl"></div>
            <div className="relative rounded-lg overflow-hidden border border-slate-800">
              <img src={Self} alt="" className="w-full h-[50vh]"/>
            </div> 
          </div>
        </div>
      </div>
 </section>
    )
}
 
export default About;       