import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "TechVista Solutions",
    period: "June 2023 – Present",
    responsibilities: [
      "Led development of enterprise-level web applications using React, Node.js, and MongoDB",
      "Designed and implemented scalable RESTful APIs for seamless front-end and back-end integration",
      "Optimized application performance resulting in 40% faster load times",
      "Mentored junior developers and conducted code reviews to maintain high code quality",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
  },
  {
    title: "Developer",
    company: "TATA Consultancy Services",
    period: "July 2021 – December 2022",
    responsibilities: [
      "Built and maintained microservices-based web applications to improve scalability",
      "Designed robust REST APIs, enabling secure data exchange with third-party services",
      "Implemented agile methodologies to streamline development processes",
      "Conducted code reviews and unit testing to ensure high-quality software"
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Fartello Infotech PVT LTD",
    period: "August 2020 – May 2021",
    responsibilities: [
      "Designed dynamic, user-friendly front-end interfaces using HTML, CSS, and JavaScript",
      "Integrated MySQL databases to manage and query data effectively",
      "Implemented secure authentication and authorization workflows using Java Servlets and JSP"
    ],
  },
  {
    title: "Front-End Developer",
    company: "Sunesis Innovations Core Tech PVT LTD",
    period: "January 2020 – June 2020",
    responsibilities: [
      "Developed responsive user interfaces with React and Redux",
      "Worked closely with UX designers to ensure visually appealing, accessible interfaces",
      "Optimized front-end components for performance and cross-browser compatibility"
    ],
  },
  {
    title: "Back-End Developer Intern",
    company: "LearnerOut",
    period: "June 2019 – August 2019",
    responsibilities: [
      "Built RESTful APIs using Node.js and Express.js for seamless data handling",
      "Managed MongoDB databases and implemented secure CRUD operations",
      "Deployed back-end applications on AWS and Heroku for scalable performance"
    ],
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-xl">{exp.title}</h3>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
