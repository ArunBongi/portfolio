import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen, ShoppingCart, Calendar, Cloud, Server, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Venue Booking System",
    description: "Designed a responsive web platform to browse, view, and book venues in real-time. Integrated REST APIs for data synchronization and dynamic content rendering. Features include real-time availability checking, interactive venue maps, and secure payment processing.",
    technologies: ["React", "Node.js", "CSS", "Supabase"],
    link: "https://github.com/arunbongi/venue-booking",
    demo: "https://arunbongi.github.io/venue-booking",
    icon: Calendar
  },
  {
    title: "E-Commerce Website",
    description: "Developed a fully functional online store with secure payment processing. Integrated MongoDB for product management and user transactions. Features include product search, filtering, cart management, and order tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    link: "https://github.com/arunbongi/e-commerce",
    demo: "https://arunbongi.github.io/e-commerce",
    icon: ShoppingCart
  },
  {
    title: "Blog Platform",
    description: "Created a content platform with user authentication and real-time database integration. Managed secure media uploads using Cloudinary for optimal performance. Features include rich text editing, comment system, and social sharing capabilities.",
    technologies: ["React", "Node.js", "Supabase"],
    link: "https://github.com/arunbongi/blog-platform",
    demo: "https://arunbongi.github.io/blog-platform",
    icon: BookOpen
  },
  {
    title: "Weather App",
    description: "Implemented an intuitive weather application displaying real-time data using OpenWeather API. Features include location-based weather updates, 5-day forecast, and weather alerts.",
    technologies: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
    link: "https://github.com/arunbongi/weather-app",
    demo: "https://arunbongi.github.io/weather-app",
    icon: Cloud
  },
  {
    title: "Task Management System",
    description: "Built a comprehensive project management tool with real-time updates and team collaboration features. Implemented drag-and-drop functionality for task management and real-time notifications.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://github.com/arunbongi/task-management",
    demo: "https://arunbongi.github.io/task-management",
    icon: Server
  },
  {
    title: "Social Network Platform",
    description: "Developed a social networking platform with features like user profiles, friend connections, and real-time messaging. Implemented secure authentication and authorization using JWT.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://github.com/arunbongi/social-network",
    demo: "https://arunbongi.github.io/social-network",
    icon: Users
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical projects and development work
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <project.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-xl">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.link, "_blank")}
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.demo, "_blank")}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;