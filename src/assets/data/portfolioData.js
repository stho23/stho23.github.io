import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "Airline App",
    description:
      "An application facilitating seamless airport and flight management with passenger booking capabilites.",
    technologies: ["Python", "Django", "CSS", "Railway"],
    siteUrl: "https://airlineapp-production.up.railway.app",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Ux",
    title: "Weather App",
    description:
      "A sophisticated weather application offering real-time global weather insights through API-driven location based search.",
    technologies: ["React", "API", "Node.js", "Netlify"],
    siteUrl: "https://stho23-weather-app.netlify.app",
  },
  {
    id: "03",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Greeting App",
    description:
      "An elegant greeting application that personalizes warm welcomes by dynamically addressing users with their names.",
    technologies: ["HTML", "Javascript", "CSS", "Vercel"],
    siteUrl: "https://greetingappweb.vercel.app",
  },
];

export default portfolios;