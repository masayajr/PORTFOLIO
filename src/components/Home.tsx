import '../App.css' 
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
 
function Home () { 
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id='hero' className="relative min-h-screen flex items-center justify-center px-6 py-20">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-slate-900"></div>  
          <div className='absolute insert-0 bg-[radical-gradient(circle_at)50%_50%,rgba(99,102,241,0.1),transparent_50%)]'></div>
          <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <div className='mb-6 inline-block'>
              <span className='px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'>
                Full Stack Developer
              </span>
              <h1 className='pt-6 mb-6 text-white text-bold'>
                Hi, I'm <span className='text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400'>Suleiman Masaya</span>
              </h1> 
              <p className='text-white mb-12 max-w-2xl mx-auto'>
                I craft seamless digital experiences from front to back. Passionate about building scalable web applications with modern technologies and clean code.
              </p> 
              <div className="flex gap-4 justify-center mb-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 rounded-lg border border-slate-700 text-white hover:bg-indigo-600 transition-colors cursor-pointer">
            Get In Touch
          </button>  
                  <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 rounded-lg border border-slate-700 text-white hover:bg-indigo-600 transition-colors cursor-pointer">
            View Projects
          </button>
          </div> 
          {/* Social Links */}
             <div className="flex gap-6 justify-center mb-16">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:suleimanmasaya6@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div> 

                <button 
          onClick={() => scrollToSection('about')}
          className="text-slate-400 hover:text-indigo-400 transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6 cursor-pointer" />
        </button>
            </div> 
            </div>     
        </section>
  )
}


export default Home; 