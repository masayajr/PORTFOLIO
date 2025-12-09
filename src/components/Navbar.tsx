import '../App.css' 
import { useState, useEffect } from 'react';  
import { Menu, X } from 'lucide-react'



   function Navbar () { 
    const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navFocus, setNavFocus] = useState("hero");

  function onNavClick(newId: string, oldId: string) {
    
    const oldElement = document.getElementById(`nav-${oldId}`);
    const element = document.getElementById(`nav-${newId}`);
    const viewElement = document.getElementById(newId);

    if(oldElement)
      oldElement.style.color = '#cad5e2';
    
    if(element)
      element.style.color = "oklch(67.3% 0.182 276.935)";
    
    viewElement?.scrollIntoView({ behavior: 'smooth' });
    setNavFocus(newId)
    setIsMobileMenuOpen(false);
}

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];
        return (     
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-sm border-b border-slate-800' 
          : 'bg-transparent'
      }`}
      >  
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-white hover:text-indigo-400 transition-colors"
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              {'CODE FLEX'}
            </span>
          </button>  
                    {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => onNavClick(item.id, navFocus)}
                className="text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div> 
           {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
           </div>  
            {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden backdrop-blur h-screen mt-2 transition-transform ">
            <div className="flex flex-col gap-4"> 
              {navItems.map((item) => (
                <button 
                  id={`nav-${item.id}`}
                  key={item.id}
                  onClick={() => {onNavClick(item.id, navFocus)}}
                  className="text-slate-300 hover:text-indigo-400 transition-colors text-center">
                  {item.label}
                </button>
              ))}
            </div>
          </div>  
        )} 
          </div>
      </nav>    
    )
};
export default Navbar; 


{/* Mobile Navigation */}
{/* <div
  className={`
    md:hidden fixed top-0 right-0 h-full w-3/4 
    backdrop-blur-md bg-black/30 shadow-xl 
    transition-transform duration-500 ease-in-out 
    ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
>
  <div className="flex flex-col gap-6 mt-20 px-6">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => {
          scrollToSection(item.id);
          setIsMobileMenuOpen(false);
        }}
        className="text-slate-200 hover:text-indigo-400 transition-colors text-left"
      >
        {item.label}
      </button>
    ))}
  </div>
</div> */}
