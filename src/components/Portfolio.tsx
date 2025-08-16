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
  Database,
  User,
  Heart,
  Coffee,
  Globe,
  MapPin,
  Phone,
  Send
} from 'lucide-react';
import developerPortrait from '@/assets/developer-portrait.jpg';

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

      {/* About Me - The Origin Story */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-b from-accent/5 to-background"
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
            THE <span className="text-primary">ORIGIN</span> STORY
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-fire rounded-2xl opacity-20 blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src={developerPortrait}
                  alt="Full Stack Warrior - Professional Developer Portrait"
                  className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-intense"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Battle Aura Effect */}
                <motion.div
                  className="absolute -inset-4 bg-primary/10 rounded-3xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="power-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="font-bangers text-2xl">THE WARRIOR</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with <span className="text-secondary font-bold">5+ years</span> of battle-tested experience. 
                  My journey began with a simple HTML page and evolved into architecting complex web applications 
                  that serve <span className="text-primary font-bold">millions of users</span>.
                </p>
              </motion.div>

              <motion.div
                className="power-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                  <h3 className="font-bangers text-2xl">THE PASSION</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I live and breathe code! Whether it's crafting pixel-perfect UIs with <span className="lightning-text">React</span> or 
                  building robust APIs with <span className="lightning-text">Node.js</span>, I approach every project like a boss battle - 
                  with strategy, determination, and an unbreakable will to succeed.
                </p>
              </motion.div>

              <motion.div
                className="power-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-6 h-6 text-primary" />
                  <h3 className="font-bangers text-2xl">THE FUEL</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me studying the latest tech trends, contributing to open source, 
                  or binge-watching anime for inspiration. My code is powered by caffeine, driven by curiosity, 
                  and fueled by the desire to create <span className="text-accent font-bold">legendary digital experiences</span>.
                </p>
              </motion.div>

              {/* Battle Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="lightning-text font-bangers text-2xl">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Conquered</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="lightning-text font-bangers text-2xl">∞</div>
                  <div className="text-sm text-muted-foreground">Cups of Coffee</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
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

      {/* Enhanced Contact Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-b from-background to-primary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
            JOIN THE <span className="hero-title">BATTLE</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="power-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bangers text-2xl mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-primary" />
                SEND MESSAGE
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Battle Name</label>
                  <input 
                    type="text" 
                    placeholder="Your awesome name"
                    className="w-full p-4 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2">Communication Portal</label>
                  <input 
                    type="email" 
                    placeholder="your.email@domain.com"
                    className="w-full p-4 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2">Mission Brief</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your legendary project idea..."
                    className="w-full p-4 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>
                
                <motion.button
                  className="energy-button w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="inline-block mr-3 w-5 h-5" />
                  DEPLOY MESSAGE
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="power-card">
                <h3 className="font-bangers text-2xl mb-6">CONTACT COORDINATES</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">Email Portal</div>
                      <div className="text-muted-foreground">dev.warrior@example.com</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold">Battle Hotline</div>
                      <div className="text-muted-foreground">+1 (555) WARRIOR</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold">Base Location</div>
                      <div className="text-muted-foreground">Silicon Valley, CA</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">Digital Presence</div>
                      <div className="text-muted-foreground">Available 24/7</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Battle Network */}
              <div className="power-card">
                <h3 className="font-bangers text-xl mb-4">BATTLE NETWORK</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    className="flex-1 p-4 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg text-center"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-bold">GitHub</div>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex-1 p-4 bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors rounded-lg text-center"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-bold">LinkedIn</div>
                  </motion.a>
                </div>
              </div>

              {/* Response Time */}
              <motion.div
                className="power-card border border-secondary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="lightning-text font-bangers text-xl">LIGHTNING RESPONSE</div>
                  <div className="text-sm text-muted-foreground">Usually reply within 24 hours</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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