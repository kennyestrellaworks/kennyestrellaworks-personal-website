import { useState } from "react";
import projects from "../data/projects.json";
import stack from "../data/stack.json";

const featuredProjects = projects.filter(
  (project) => project.category === "featured",
);
const otherProjects = projects.filter(
  (project) => project.category !== "featured",
);

// console.log("featuredProjects", featuredProjects);
// console.log("otherProjects", otherProjects);

export const ProjectItems = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const renderStack = (projectStack) => {
    return projectStack.map((stackId) => {
      const stackItem = stack.find((item) => item._id === stackId);

      if (!stackItem) return null;

      return (
        <li className="content__projects-items-icons-icon" key={stackItem._id}>
          <img src={stackItem.imageUrl} alt={stackItem.name} />
        </li>
      );
    });
  };

  return featuredProjects.map((project, index) => {
    const isActive = activeProjectId === project._id;

    return (
      <div
        className="card-1 content__projects-item"
        key={index}
        data-id={project._id}
        onMouseEnter={() => setActiveProjectId(project._id)}
        onMouseLeave={() => setActiveProjectId(null)}
      >
        <div className="card-1__area-1">
          <img
            className="card-1__area-1-img"
            src={project.bannerImage}
            alt={project.mainTitle}
          />
        </div>
        <div className="card-1__area-2">
          <div className="card-1__area-2-wrap">
            <div className="heading-stylized-1">
              <div className="heading-stylized-1__colored">
                <h1 className="heading-stylized-1__unskew">
                  {project.mainTitle}
                </h1>
              </div>
              <h1 className="heading-stylized-1__extra">{project.subtitle}</h1>
            </div>
            <div
              className="card-1__blurb paragraph-2"
              dangerouslySetInnerHTML={{ __html: project.blurb }}
            />
            <ul className="card-2__icons content__projects-items-icons">
              {renderStack(project.stack)}
            </ul>
            {/* <p className="card-1__icons paragraph-2">
              {project.stack.join(" / ")}
            </p> */}
          </div>
        </div>
        <div
          className={`content__projects-item-overlay ${
            isActive
              ? "content__projects-item-overlay-show"
              : "content__projects-item-overlay-hide"
          }`}
        >
          <div className="content__projects-item-overlay-buttons">
            {project.sourceCode && (
              <button className="button-2">
                <a
                  class="button-2__text"
                  href={project.sourceCode}
                  target="_blank"
                >
                  <svg
                    class="button-icon button-icon__source-code"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                  >
                    <g id="icon-source-code" transform="translate(-7206 -2477)">
                      <rect
                        id="Rectangle_1828"
                        data-name="Rectangle 1828"
                        width="34"
                        height="34"
                        transform="translate(7206 2477)"
                        fill="red"
                        opacity="0"
                      />
                      <rect
                        id="Rectangle_1829"
                        data-name="Rectangle 1829"
                        width="34"
                        height="29"
                        transform="translate(7206 2480)"
                        fill="#802424"
                        opacity="0"
                      />
                      <g
                        id="code-working-sharp"
                        transform="translate(7207 2485)"
                      >
                        <ellipse
                          id="Ellipse_22"
                          data-name="Ellipse 22"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(14.061 6.915)"
                        />
                        <ellipse
                          id="Ellipse_23"
                          data-name="Ellipse 23"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(19.688 6.915)"
                        />
                        <ellipse
                          id="Ellipse_24"
                          data-name="Ellipse 24"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(8.434 6.915)"
                        />
                        <path
                          id="Path_26"
                          data-name="Path 26"
                          d="M10.222,132.106.1,123.253,10.222,114.4l1.726,1.976-7.859,6.877,7.859,6.877Z"
                          transform="translate(-0.1 -114.4)"
                        />
                        <path
                          id="Path_27"
                          data-name="Path 27"
                          d="M324.126,132.106l-1.726-1.976,7.859-6.877-7.859-6.877,1.726-1.976,10.122,8.853Z"
                          transform="translate(-302.249 -114.4)"
                        />
                      </g>
                    </g>
                  </svg>
                  source code
                </a>
              </button>
            )}
            {project.liveDemo && (
              <button className="button-2">
                <a
                  class="button-2__text"
                  href={project.liveDemo}
                  target="_blank"
                >
                  <svg
                    class="button-icon button-icon__source-code"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                  >
                    <g id="icon-source-code" transform="translate(-7206 -2477)">
                      <rect
                        id="Rectangle_1828"
                        data-name="Rectangle 1828"
                        width="34"
                        height="34"
                        transform="translate(7206 2477)"
                        fill="red"
                        opacity="0"
                      />
                      <rect
                        id="Rectangle_1829"
                        data-name="Rectangle 1829"
                        width="34"
                        height="29"
                        transform="translate(7206 2480)"
                        fill="#802424"
                        opacity="0"
                      />
                      <g
                        id="code-working-sharp"
                        transform="translate(7207 2485)"
                      >
                        <ellipse
                          id="Ellipse_22"
                          data-name="Ellipse 22"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(14.061 6.915)"
                        />
                        <ellipse
                          id="Ellipse_23"
                          data-name="Ellipse 23"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(19.688 6.915)"
                        />
                        <ellipse
                          id="Ellipse_24"
                          data-name="Ellipse 24"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(8.434 6.915)"
                        />
                        <path
                          id="Path_26"
                          data-name="Path 26"
                          d="M10.222,132.106.1,123.253,10.222,114.4l1.726,1.976-7.859,6.877,7.859,6.877Z"
                          transform="translate(-0.1 -114.4)"
                        />
                        <path
                          id="Path_27"
                          data-name="Path 27"
                          d="M324.126,132.106l-1.726-1.976,7.859-6.877-7.859-6.877,1.726-1.976,10.122,8.853Z"
                          transform="translate(-302.249 -114.4)"
                        />
                      </g>
                    </g>
                  </svg>
                  live demo
                </a>
              </button>
            )}
            {project.videoDemo && (
              <button className="button-2">
                <a
                  class="button-2__text"
                  href={project.videoDemo}
                  target="_blank"
                >
                  <svg
                    class="button-icon button-icon__source-code"
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                  >
                    <g id="icon-source-code" transform="translate(-7206 -2477)">
                      <rect
                        id="Rectangle_1828"
                        data-name="Rectangle 1828"
                        width="34"
                        height="34"
                        transform="translate(7206 2477)"
                        fill="red"
                        opacity="0"
                      />
                      <rect
                        id="Rectangle_1829"
                        data-name="Rectangle 1829"
                        width="34"
                        height="29"
                        transform="translate(7206 2480)"
                        fill="#802424"
                        opacity="0"
                      />
                      <g
                        id="code-working-sharp"
                        transform="translate(7207 2485)"
                      >
                        <ellipse
                          id="Ellipse_22"
                          data-name="Ellipse 22"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(14.061 6.915)"
                        />
                        <ellipse
                          id="Ellipse_23"
                          data-name="Ellipse 23"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(19.688 6.915)"
                        />
                        <ellipse
                          id="Ellipse_24"
                          data-name="Ellipse 24"
                          cx="1.938"
                          cy="1.938"
                          rx="1.938"
                          ry="1.938"
                          transform="translate(8.434 6.915)"
                        />
                        <path
                          id="Path_26"
                          data-name="Path 26"
                          d="M10.222,132.106.1,123.253,10.222,114.4l1.726,1.976-7.859,6.877,7.859,6.877Z"
                          transform="translate(-0.1 -114.4)"
                        />
                        <path
                          id="Path_27"
                          data-name="Path 27"
                          d="M324.126,132.106l-1.726-1.976,7.859-6.877-7.859-6.877,1.726-1.976,10.122,8.853Z"
                          transform="translate(-302.249 -114.4)"
                        />
                      </g>
                    </g>
                  </svg>
                  video demo
                </a>
              </button>
            )}
          </div>
          <div class="content__projects-item-overlay-background"></div>
        </div>
      </div>
    );
  });
};
