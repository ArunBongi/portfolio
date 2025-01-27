import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillsData = {
  "Languages & Technologies": [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "SQL"
  ],
  "Frameworks & Libraries": [
    "React",
    "Bootstrap",
    "Express.js",
    "Tailwind CSS",
    "Redux"
  ],
  "Databases & Tools": [
    "MongoDB",
    "MySQL",
    "Supabase",
    "Git",
    "GitHub",
    "VSCode"
    ],
  "Professional Skills": [
    "UI/UX Design",
    "Responsive Design",
    "REST APIs",
    "Authentication & Authorization",
    "Agile Methodologies",
    "Problem Solving"
  ],
};

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-lg text-primary">{category}</h3>
                  <ul className="space-y-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
                        {skill}
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

export default Skills;