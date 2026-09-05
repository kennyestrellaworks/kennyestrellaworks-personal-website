export const ContactForm = ({ onCloseButtonClick }) => {
  return (
    <div className="contact-form">
      <div className="contact-form__wrap contact-form__wrap-hide">
        <div className="contact-form__box">
          <div className="contact-form__close">
            <button
              className="contact-form__close-button button-icon-2"
              onClick={onCloseButtonClick}
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
          <form
            action="https://formsubmit.co/ba4753fc8f2715319cae89c770443ade"
            method="post"
            className="contact-form__form"
          >
            <div className="contact-form__heading">
              <h1 className="heading-1 content__projects-heading-h1">
                contact form
              </h1>
            </div>
            <div className="contact-form__form-group">
              <input
                type="text"
                name="name"
                className="contact-form__input"
                placeholder="Name"
                required=""
              />
            </div>
            <div className="contact-form__form-group">
              <input
                type="text"
                name="email"
                className="contact-form__input"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="contact-form__form-group">
              <textarea
                name="message"
                className="contact-form__input contact-form__textarea"
                id="message"
                cols="30"
                rows="6"
                placeholder="Message"
                required=""
                spellCheck="false"
              ></textarea>
            </div>
            <div className="contact-form__form-group">
              <button
                className="button-1 contact-form__send-button"
                type="submit"
              >
                <span className="button-1__text">send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
