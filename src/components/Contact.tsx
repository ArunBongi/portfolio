import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-16 hover:scale-105 transition-transform"
                    onClick={() => window.open("mailto:arun.bongi19@gmail.com")}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    arun.bongi19@gmail.com
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 hover:scale-105 transition-transform"
                    onClick={() => window.open("tel:+17785485116")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    +1 778-548-5116
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 hover:scale-105 transition-transform"
                    onClick={() => window.open("https://www.linkedin.com/in/arun-bongi/", "_blank")}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 hover:scale-105 transition-transform"
                    onClick={() => window.open("https://github.com/arunbongi", "_blank")}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;