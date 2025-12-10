import '../App.css'  
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

function Contact () {  
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  }); 

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    return ( 
 <section id="contact" className="py-24 px-6 bg-slate-950"> 
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-400">Email</p>
                    <a href="mailto:suleimanmasaya6@gmail.com" className="text-white hover:text-indigo-400 transition-colors">
                      suleimanmasaya6@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-400">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-indigo-400 transition-colors">
                      +2347035914420
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10">
                    <MapPin className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-400">Location</p>
                    <p className="text-white">Kaduna State, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
              <p className="text-slate-300">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question, just wanting to say hi or wanting to collaborate on a project. <br />
                Feel free to reach out
              </p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} action="https://form.typeform.com/to/cH6tTLZj" method='POST' className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-400">
          © 2025 CODE FLEX. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
    )   
}

export default Contact; 