import { useEffect, useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { ProfileSection } from "./components/ProfileSection";
import { ProjectItems } from "./components/ProjectItems";
import "./sass/style.scss";

export const App1 = () => {
  const [browserWidth, setBrowserWidth] = useState(() =>
    typeof window === "undefined" ? 0 : window.innerWidth,
  );
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setBrowserWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isCompactLayout = browserWidth <= 1270;
  const containerWidth = Math.min(browserWidth, 1400);
  const profileContentWidth = browserWidth >= 1300 ? 360 : 320;
  const projectsWidth = isCompactLayout
    ? "100%"
    : `${(containerWidth - profileContentWidth) / 10}rem`;
  const profileWidth = `${containerWidth / 10}rem`;

  useEffect(() => {
    if (!isCompactLayout) {
      setIsProfileOpen(false);
    }
  }, [isCompactLayout]);

  return (
    <div className="wrap">
      <div className="wrap__screen">
        <div className="wrap__viewport">
          <ContactForm />
          <div className="page-overlay page-overlay__hide"></div>
          <div className="wrap__content">
            <main className="content">
              <div
                className={`content__show-profile ${
                  isCompactLayout && !isProfileOpen
                    ? "content__show-profile-default"
                    : "content__show-profile-hide"
                }`}
                style={{ width: profileWidth }}
              >
                <div className="content__show-profile-wrap">
                  <div
                    className={`content__show-profile-box ${
                      isProfileOpen ? "content__show-profile-box-active" : ""
                    }`}
                    onClick={() => setIsProfileOpen(true)}
                  >
                    <div className="content__show-profile-block">
                      <div className="content__show-profile-area-1">
                        <div className="content__profile-image">
                          <img
                            src="images/profile-avatar.jpg"
                            alt=""
                            className="content__profile-image-avatar"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="content__projects">
                <div
                  className="content__projects-wrap"
                  style={{ width: projectsWidth }}
                >
                  <div className="content__projects-heading">
                    <div className="content__projects-heading-wrap">
                      <h1 className="heading-1 content__projects-heading-h1">
                        featured projects
                      </h1>
                      {/* <p className="paragraph-1 content__projects-heading-p">
                        Some projects that I completed along the way. When I
                        start a project, I usually do the sketches first, then
                        design the interface, then come up with some plan on how
                        I can structure my code during development.
                      </p> */}
                    </div>
                  </div>
                  <div className="content__projects-items">
                    <div className="content__projects-items-primary">
                      <div className="content__projects-items-primary-box">
                        <ProjectItems />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="content__profile content__profile-default"
                style={{ width: profileWidth }}
              >
                <ProfileSection
                  isOpen={isProfileOpen}
                  isCompactLayout={isCompactLayout}
                  contentWidth={`${profileContentWidth / 10}rem`}
                  onClose={() => setIsProfileOpen(false)}
                />
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
