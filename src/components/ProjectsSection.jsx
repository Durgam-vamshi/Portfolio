
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "OurShoppe - E-commerce Web Application",
    description:
      "A full-stack e-commerce app with secure user authentication, OTP verification, product management, and Redis caching for performance.",
    image: "/projects/ourshoppe.png",
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "Redis", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Gemini AI Prompt-to-Code Converter",
    description:
      "An AI-powered tool that converts natural language prompts into HTML and CSS code using Gemini API, built with React and Node.js.",
    image: "/projects/geminiresume.png",
    tags: ["React.js", "Node.js", "Express.js", "Gemini API", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "UrbanRanch - Real Estate Website",
    description:
      "Responsive real estate platform with property showcases, carousel UI using Swiper.js, and optimized performance using Next.js SSR.",
    image: "/projects/urbanranch.png",
    tags: ["Next.js", "React.js", "Bootstrap", "Swiper.js", "CSS3"],
    demoUrl: "https://urbanranch.irarealty.in",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Curious Parenting Website",
    description:
      "Converted Figma designs into a fully responsive React application using Tailwind CSS with reusable components and routing.",
    image: "/projects/curiosuparenting.png",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Artify - MERN Stack App (Ongoing)",
    description:
      "A full-stack MERN application with secure JWT authentication, role-based access, and responsive design built for digital creators.",
    image: "/projects/website.jpg",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent professional and freelance projects.
          Each one focuses on performance, scalability, and user experience using
          modern full-stack technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Durgam-vamshi"
            rel="noopener noreferrer"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
