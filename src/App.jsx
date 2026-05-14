import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Gamepad2,
  Box,
  Code2,
  Sparkles,
  ChevronRight,
  Download,
  Play,
  Star,
  X,
  ArrowUpRight,
  Layers3,
  Trophy,
  Briefcase,
} from "lucide-react";

export default function HardikGameDevPortfolio() {
  const [activeBlender, setActiveBlender] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);
  const [trail, setTrail] = useState([]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const move = (e) => {
      const point = { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() };
      setCursor({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [...prev.slice(-8), point]);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    if (trail.length === 0) return;
    const timeout = setTimeout(() => {
      setTrail((prev) => prev.slice(1));
    }, 120);
    return () => clearTimeout(timeout);
  }, [trail]);

  const blenderAssets = [
    {
      title: "Weapon Props",
      type: "Hard Surface",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Stylized Environment",
      type: "Environment Art",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Sci-Fi Asset",
      type: "Game Ready Model",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Vehicle Concept",
      type: "Modeling + Materials",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const projects = [
    {
      title: "Sharp Shooter",
      category: "Unity 3D / Action Shooter",
      short: "Fast-paced shooting game with immersive combat mechanics and polished gameplay.",
      description:
        "Sharp Shooter is a Unity 3D action game focused on engaging combat, target precision, responsive controls, and a fun arcade-style shooting experience. Built with gameplay logic, level flow, and visual polish in mind.",
      tech: ["Unity", "C#", "Game Logic", "UI", "Level Design"],
      icon: <Gamepad2 className="w-5 h-5" />,
      image: `${import.meta.env.BASE_URL}images/sharpshooter.png`,
      link: "https://hardikdandekar.itch.io/sharp-shooter",
    },
 
    {
      title: "Rocket Boost",
      category: "Unity 3D / Physics Challenge",
      short: "Physics-based rocket navigation game with precision control and level progression.",
      description:
        "Rocket Boost is a physics-driven Unity game where players carefully control a rocket through obstacles and tricky environments. It focuses on movement precision, collision handling, and smooth gameplay feedback.",
      tech: ["Unity", "C#", "Physics", "Collision System", "Level Progression"],
      icon: <Play className="w-5 h-5" />,
      image: `${import.meta.env.BASE_URL}images/rocket.png`,
      link: "https://hardikdandekar.itch.io/rooket-boost",
    },
    
    {
      title: "Car Rental Website",
      category: "MERN Stack / Full-Stack Web App",
      short: "Modern car rental platform with booking system, authentication, and responsive UI.",
      description:
        "A full-stack car rental web application built using React, Node.js, Express.js, and MongoDB. Features include user authentication, car listings, booking management, responsive design, and an admin dashboard for managing cars and bookings.",
      tech: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      icon: <Briefcase className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
      link: "https://carnation-frontend.onrender.com",
    }
  ];

  const skills = [
    "Unity 3D",
    "C#",
    "Blender",
    "Game Design",
    "Level Design",
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Java",
    "HTML",
    "CSS",
  ];

  const heroHighlights = [
    {
      title: "Unity Game Development",
      subtitle: "Gameplay • Mechanics • Polish",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Blender 3D Assets",
      subtitle: "Models • Props • Game Ready",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Full Stack Projects",
      subtitle: "React • Node • MongoDB",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const handleHover = (state) => setCursorHover(state);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative font-sans cursor-none">
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-16 h-16 rounded-full border-2 border-cyan-400 border-t-transparent mx-auto mb-6"
              />
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                Hardik Dandekar
              </motion.h1>
              <p className="text-gray-400 mt-2">Loading Portfolio...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
      />

      <div
        className="fixed w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-[99] mix-blend-screen"
        style={{ left: cursor.x - 8, top: cursor.y - 8 }}
      />
      <motion.div
        animate={{ scale: cursorHover ? 2.4 : 1, opacity: cursorHover ? 0.9 : 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="fixed w-10 h-10 rounded-full border border-cyan-300 pointer-events-none z-[98]"
        style={{ left: cursor.x - 20, top: cursor.y - 20 }}
      />

      {trail.map((item, idx) => (
        <div
          key={item.id}
          className="fixed rounded-full bg-cyan-300 pointer-events-none z-[97]"
          style={{
            left: item.x - 3,
            top: item.y - 3,
            width: `${Math.max(2, 8 - idx * 0.7)}px`,
            height: `${Math.max(2, 8 - idx * 0.7)}px`,
            opacity: Math.max(0.08, 0.5 - idx * 0.05),
          }}
        />
      ))}

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/5 blur-3xl rounded-full" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.03 }} className="font-bold text-xl tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Hardik.dev
            </span>
          </motion.div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {['About', 'Projects', 'Blender', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className="hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" /> Game Developer • Blender Artist • MERN Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Building <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Interactive Games</span> & Premium Digital Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-400 text-lg mt-6 max-w-2xl"
            >
              I’m Hardik Dandekar — a passionate developer focused on Unity 3D game development, Blender asset creation, and full-stack web apps. I love building polished, interactive, and user-focused experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#projects"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className="group px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                View Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                 href="https://wa.me/919399211246"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition font-semibold"
              >
                Contact Me
              </a>
              <a
               href={`${import.meta.env.BASE_URL}Resume.pdf`}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className="px-6 py-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/15 transition font-semibold flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-4 shadow-2xl overflow-hidden">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative rounded-[1.5rem] overflow-hidden h-[420px]"
              >
                <img
                  src={heroHighlights[0].image}
                  alt={heroHighlights[0].title}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs w-fit mb-3">
                    <Trophy className="w-3.5 h-3.5" /> Creative Developer
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{heroHighlights[0].title}</h3>
                  <p className="text-gray-300 mt-2">{heroHighlights[0].subtitle}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {heroHighlights.slice(1).map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + idx * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="relative rounded-3xl overflow-hidden border border-white/10 h-36"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-[11px] text-gray-300 mt-1">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: <Gamepad2 className="w-6 h-6" />, title: "Game Development", text: "I build engaging Unity 3D games with gameplay systems, level design, physics, UI, and smooth player experience." },
            { icon: <Box className="w-6 h-6" />, title: "Blender Workflow", text: "I create game-ready models, hard-surface props, stylized assets, and visual experiments to improve my game art pipeline." },
            { icon: <Code2 className="w-6 h-6" />, title: "Full-Stack Development", text: "I also build real-world web apps and admin panels using React, Node.js, MongoDB, and modern UI practices." },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="text-cyan-300 text-sm uppercase tracking-[0.2em]">Featured Work</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Projects That Showcase My Skills</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="relative h-60 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: idx * 0.2 }}
                  className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-cyan-300 flex items-center justify-center"
                >
                  {project.icon}
                </motion.div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-cyan-300 mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <p className="text-gray-400 leading-relaxed mb-5">{project.short}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-xl text-xs bg-white/5 border border-white/10 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                  className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/90 to-blue-600/90 font-semibold flex items-center justify-center gap-2 hover:gap-3 transition"
                >
                  View Details <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
  id="blender"
  className="relative max-w-7xl mx-auto px-6 py-28 overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

  {/* Heading */}
  <div className="text-center mb-20 relative z-10">
    <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
      Blender Showcase
    </p>

    <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
      Cinematic 3D <br /> Asset Collection
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
      A collection of stylized environments, hard-surface models,
      sci-fi props, and game-ready assets built in Blender.
    </p>
  </div>

  {/* Images */}
  <div className="space-y-32 relative z-10">

    {[
      {
        title: "Orc Character",
        type: "Character Modeling",
        image: `${import.meta.env.BASE_URL}images/113.png`,
      },
      {
        title: "Orc Character",
        type: "Character Modeling",
        image: `${import.meta.env.BASE_URL}images/114.png`,
      },
      {
        title: "Game Environment",
        type: "Stylized Scene",
        image: `${import.meta.env.BASE_URL}images/real.png`,
      },
      {
        title: "Robot Character",
        type: "Character Modeling",
        image: `${import.meta.env.BASE_URL}images/robot.png`,
      },
      {
        title: "Robot Character",
        type: "Character Modeling",
        image: `${import.meta.env.BASE_URL}images/robot3.png`,
      },
      {
        title: "Scary Room",
        type: "Environment Art",
        image: `${import.meta.env.BASE_URL}images/horrorRoom.png`,
      },
    ].map((asset, index) => (
      <motion.div
        key={asset.title}
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -120 : 120,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className={`flex ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        <motion.div
          whileHover={{
            scale: 1.03,
            y: -10,
          }}
          transition={{ duration: 0.4 }}
          className="relative group w-full lg:w-[80%] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,255,0.08)]"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={asset.image}
              alt={asset.title}
              className="w-full h-[500px] md:h-[650px] object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Floating Number */}
            <div className="absolute top-6 left-6 text-6xl font-black text-white/10">
              0{index + 1}
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 p-8 md:p-12">
              <p className="text-cyan-300 uppercase tracking-[0.2em] text-sm">
                {asset.type}
              </p>

              <h3 className="text-3xl md:text-5xl font-bold mt-3">
                {asset.title}
              </h3>

              <p className="text-gray-300 mt-5 max-w-2xl text-lg leading-relaxed">
                High-quality Blender artwork optimized for real-time rendering,
                cinematic visuals, and immersive gameplay environments.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>



      <section id="skills" className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
        <div className="mb-8">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.2em]">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">My Technical Stack</h2>
        </div>

        <motion.div
          animate={{ x: [0, -500] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div key={`${skill}-${idx}`} className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-gray-200 whitespace-nowrap">
              {skill}
            </div>
          ))}
        </motion.div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-10 backdrop-blur-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-cyan-300 text-sm uppercase tracking-[0.2em]">Let’s Connect</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-2">Open to Game Dev & Web Dev Opportunities</h2>
              <p className="text-gray-400 mt-4 max-w-xl">
                If you’re looking for a passionate developer who can build games, create 3D assets, and craft modern web experiences — let’s connect.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/HardikDandekar" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/hardik-dandekar-141104y/" },
                { icon: <Mail className="w-5 h-5" />, label: "Email", href: " http://hardikdandekar35@gmail.com " },
                { icon: <ExternalLink className="w-5 h-5" />, label: "Portfolio", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => handleHover(true)}
                  onMouseLeave={() => handleHover(false)}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-xs text-gray-400">Click to open</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 px-6 text-center text-sm text-gray-500">
        © 2026 Hardik Dandekar • Crafted with React, Framer Motion & Passion for Games.
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#0a0a0f] p-6 md:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-cyan-300 text-sm">{selectedProject.category}</p>
                  <h3 className="text-3xl font-bold mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={selectedProject.link} className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold flex items-center gap-2">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
