import '../App.css'   
import { Code2, Database, Cloud, Smartphone, GitBranch, Layers } from 'lucide-react';

function Skills () { 
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['Html', 'CSS', 'Javascript', 'React.js', 'Talewind CSS', 'Next.js']
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Nest.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      skills: ['React Native', 'PWA', 'Responsive Design', 'iOS', 'Android']
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Code Review']
    },
    {
      icon: Layers,
      title: 'Architecture',
      skills: ['Microservices', 'REST APIs', 'GraphQL', 'System Design', 'Testing']
    }
  ];
    return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors cursor-pointer">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-indigo-500/10">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 rounded-full bg-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    )
}

export default Skills; 