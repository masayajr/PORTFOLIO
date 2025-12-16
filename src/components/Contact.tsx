import '../App.css';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import type { ChangeEvent} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('Sending...'); // optional status message

  try {
    const response = await fetch('http://localhost:3333/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus(data.message); // "Email sent successfully."
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus(data.message || 'Failed to send message.');
    }
  } catch (err) {
    console.error(err);
    setStatus('Failed to send message.');
  }
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
                    <a href="tel:+2347035914420" className="text-white hover:text-indigo-400 transition-colors">
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
            
            <div className="p-6 rounded-lg bg-linear-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
              <p className="text-slate-300">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question, just wanting to say hi or wanting to collaborate on a project. <br />
                Feel free to reach out
              </p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
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

              {status && <p className="mt-4 text-center text-slate-300">{status}</p>}
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