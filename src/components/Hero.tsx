import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Arun Bongi
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
          Dedicated Web Developer with 4+ years of experience designing, developing, and deploying scalable web applications. 
          Proficient in modern web technologies, including React, Node.js, and MongoDB. 
          Passionate about creating intuitive, user-friendly interfaces and robust back-end systems that drive business success.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            variant="default"
            size="lg"
            onClick={() => window.open("https://github.com/arunbongi", "_blank")}
            className="hover:scale-105 transition-transform"
          >
            <Github className="mr-2 h-5 w-5" /> GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://www.linkedin.com/in/arun-bongi/", "_blank")}
            className="hover:scale-105 transition-transform"
          >
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("mailto:arun.bongi19@gmail.com")}
            className="hover:scale-105 transition-transform"
          >
            <Mail className="mr-2 h-5 w-5" /> Email
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("tel:+17785485116")}
            className="hover:scale-105 transition-transform"
          >
            <Phone className="mr-2 h-5 w-5" /> +1 778-548-5116
          </Button>
        </div>
        <button
          onClick={scrollToProjects}
          className="animate-bounce p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;