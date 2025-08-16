import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Code2, 
  Zap, 
  Shield, 
  Rocket, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  Server,
  Smartphone,
  Database
} from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const skills = [
    { name: 'React/Next.js', level: 95, icon: Code2 },
    { name: 'TypeScript', level: 90, icon: Shield },
    { name: 'Node.js/Express', level: 88, icon: Server },
    { name: 'Database Design', level: 85, icon: Database },
    { name: 'Mobile Dev', level: 80, icon: Smartphone },
    { name: 'Performance', level: 92, icon: Zap }
  ];

  const projects = [
    {
      title: 'E-Commerce Beast',
      description: 'Full-stack powerhouse with Next.js 14, Stripe integration, and real-time inventory management.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      status: 'LIVE',
      impact: '300% sales increase'
    },
    {
      title: 'Battle Dashboard',
      description: 'Real-time analytics platform processing 1M+ events daily with WebSocket connections.',
      tech: ['React', 'Node.js', 'Redis', 'MongoDB'],
      status: 'ENTERPRISE',
      impact: '50ms response time'
    },
    {
      title: 'Mobile Warrior',
      description: 'React Native app with offline-first architecture and seamless data synchronization.',
      tech: ['React Native', 'TypeScript', 'SQLite', 'AWS'],
      status: 'APP STORE',
      impact: '4.9★ rating'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-bangers text-6xl md:text-8xl lg:text-9xl hero-title tracking-wider">
              FULL STACK
              <br />
              <span className="lightning-text">WARRIOR</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Crafting legendary web experiences with <span className="text-secondary font-bold">Next.js</span>,
            <span className="text-primary font-bold"> TypeScript</span>, and 
            <span className="text-accent font-bold"> Node.js</span>. 
            Ready to level up your digital presence!
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="energy-button group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="inline-block mr-3 w-5 h-5" />
              DEPLOY TOGETHER
            </motion.button>
            
            <motion.button
              className="flex items-center gap-3 px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              DOWNLOAD CV
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Battle Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-6 h-6 bg-secondary rounded-full opacity-40"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.section>

      {/* Skills Power Grid */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="font-bangers text-4xl md:text-6xl text-center mb-16"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary">COMBAT</span> SKILLS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="power-card battle-glow group"
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bangers text-xl">{skill.name}</h3>
                </div>
                
                <div className="energy-bar mb-2">
                  <motion.div
                    className="energy-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Power Level</span>
                  <span className="lightning-text font-bold">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Battle Projects */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-b from-background to-accent/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="font-bangers text-4xl md:text-6xl text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            LEGENDARY <span className="text-secondary">PROJECTS</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`power-card cursor-pointer ${activeProject === index ? 'ring-2 ring-primary' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bangers text-2xl">{project.title}</h3>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    project.status === 'LIVE' ? 'bg-accent text-accent-foreground' :
                    project.status === 'ENTERPRISE' ? 'bg-primary text-primary-foreground' :
                    'bg-secondary text-secondary-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="lightning-text text-sm font-bold">
                    {project.impact}
                  </span>
                  <motion.button
                    className="p-2 bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Battle */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="font-bangers text-4xl md:text-6xl mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            READY FOR <span className="hero-title">BATTLE?</span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's forge the next legendary web application together. 
            Your vision + my code = Digital domination!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:dev@example.com"
              className="energy-button group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="inline-block mr-3 w-5 h-5" />
              START MISSION
            </motion.a>

            <div className="flex gap-4">
              <motion.a
                href="#"
                className="p-4 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="p-4 bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors rounded-lg"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Battle Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Full Stack Warrior. Powered by anime energy and caffeine.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;