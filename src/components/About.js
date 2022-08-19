import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h3>React JS Crash Course 2021</h3>
      <a
        href="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
        target="_blank"
        rel="noreferrer"
      >
        Click here to see the video
      </a>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
