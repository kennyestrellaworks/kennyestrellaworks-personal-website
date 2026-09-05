export const ProfileSection = ({
  isOpen,
  isCompactLayout,
  contentWidth,
  onClose,
  onContactClick,
}) => {
  return (
    <div className="content__profile-wrap">
      <div
        className={`content__profile-close ${
          isCompactLayout && !isOpen
            ? "content__profile-close-hide"
            : "content__profile-close-default"
        }`}
      >
        <div className="content__profile-wrap">
          <div className="content__profile-close content__profile-close-default">
            {/* Close button for profile sidebar */}
            <button
              className={`content__profile-close-button button-icon-1 ${isCompactLayout ? "content__profile-close-default" : "content__profile-close-hide"}`}
              onClick={onClose}
              type="button"
            >
              <svg
                className="button-icon-1__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="17.358"
                height="17.358"
                viewBox="0 0 17.358 17.358"
              >
                <rect
                  id="Rectangle_1771"
                  data-name="Rectangle 1771"
                  width="2.654"
                  height="21.894"
                  transform="translate(15.481 0) rotate(45)"
                />
                <rect
                  id="Rectangle_1772"
                  data-name="Rectangle 1772"
                  width="2.654"
                  height="21.894"
                  transform="translate(0 1.877) rotate(-45)"
                />
              </svg>
            </button>
          </div>
          {/* Profile sidebar  */}
          <div
            className={`content__profile-wrap-content ${
              isCompactLayout && !isOpen
                ? "content__profile-wrap-content-hide"
                : "content__profile-wrap-content-default"
            }`}
            style={{ width: contentWidth }}
          >
            <div className="content__profile-image">
              <img
                src="images/profile-avatar.jpg"
                alt=""
                className="content__profile-image-avatar"
              />
            </div>
            <div className="content__profile-full-name">
              <h1 className="heading-2">kenny a. estrella</h1>
            </div>
            <div className="content__profile-job-position">
              <h2 className="subheading-1">creative developer</h2>
            </div>
            <ul className="content__profile-social-icons icon-links-1">
              <li className="icon-links-1__item">
                <a
                  href="https://www.linkedin.com/in/kenny-estrella-809749ba/"
                  target="_blank"
                  className="icon-links-1__links"
                >
                  <img src="images/icon-linkedin.svg" alt="Linkedin" />
                </a>
              </li>
              <li className="icon-links-1__item">
                <a
                  href="https://github.com/kennyestrellaworks?tab=repositories"
                  target="_blank"
                  className="icon-links-1__links"
                >
                  <img src="images/icon-github.svg" alt="Github" />
                </a>
              </li>
            </ul>
            <div className="content__profile-blurb">
              <p className="paragraph-3">
                Hey everyone! I'm a Creative Developer who has both the skills
                of a Digital Artist and a React Developer.
              </p>
            </div>
            <div className="content__profile-buttons">
              <button
                className="button-1 content__contact-button"
                onClick={onContactClick}
              >
                <span className="button-1__text">contact</span>
              </button>
              <button className="button-1">
                <span className="button-1__text">
                  <a
                    className="button-1__text-link"
                    target="_blank"
                    href="/resume-kenny-estrella.pdf"
                  >
                    resume
                  </a>
                </span>
              </button>
            </div>
            <div className="content__profile-web-technologies">
              <h1 className="heading-2">web technologies</h1>
              <ul className="icon-grouped">
                <li className="icon-grouped__item">
                  <img src="images/icon-react.svg" alt="react" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-typescript.svg" alt="typescript" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-html5.svg" alt="html5" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-css3.svg" alt="css3" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-javascript.svg" alt="javascript" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-sass.svg" alt="sass" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-github.svg" alt="github" />
                </li>
              </ul>
            </div>
            <div className="content__profile-tools-and-apps">
              <h1 className="heading-2">tools &amp; apps</h1>
              <ul className="icon-grouped">
                <li className="icon-grouped__item">
                  <img src="images/icon-figma.svg" alt="figma" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-filezilla.svg" alt="filezilla" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-git.svg" alt="git" />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-vscode.svg" alt="vscode" />
                </li>
                <li className="icon-grouped__item">
                  <img
                    src="images/icon-adobe-illustrator.svg"
                    alt="adobe-illustrator"
                  />
                </li>
                <li className="icon-grouped__item">
                  <img
                    src="images/icon-adobe-photoshop.svg"
                    alt="adobe-photoshop"
                  />
                </li>
                <li className="icon-grouped__item">
                  <img src="images/icon-adobe-xd.svg" alt="adobe-xd" />
                </li>
              </ul>
            </div>
            <div className="profile-footer">
              <div className="profile-footer__wrap">
                <p className="paragraph-3">
                  I'm also an illustrator and concept artist, you can visit my
                  website at the links below.
                </p>
                <div className="content__profile-buttons">
                  <button className="button-1">
                    <span className="button-1__text">
                      <a
                        className="button-1__text-link"
                        target="_blank"
                        href="https://www.artstation.com/treadway"
                      >
                        artstation
                      </a>
                    </span>
                  </button>
                  <button className="button-1">
                    <span className="button-1__text">
                      <a
                        className="button-1__text-link"
                        target="_blank"
                        href="https://kennyestrellaworks.wixsite.com/mysite
"
                      >
                        Wix
                      </a>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
