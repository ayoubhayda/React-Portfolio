import "./main.css";
import { categories, Projects } from "../../constants";
import Card from "./project_card/Card";
import { useState } from "react";

const Main = () => {
  const [projects, setProjects] = useState(Projects);
  const [active, setActive] = useState("all");

  const Filter = (category) => {
    setActive(category);

    if (category === "all") {
      setProjects(Projects);
    } else {
      setProjects(
        Projects.filter((project) =>
          project.category.find((item) => item === category)
        )
      );
    }
  };
  return (
    <section className="main">
      <div className="left-section">
        {categories.map((category) => (
          <button
            onClick={() => {
              Filter(category.slug);
            }}
            className={`${category.slug == active? 'active': ''}`}
            key={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="right-section">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Main;
