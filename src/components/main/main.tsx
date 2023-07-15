import "./styles/style.css";

export const Main = () => {
  return (
    <div className="Wrapper">
      <div className="Card">
        <div className="FrontCard">
          <div className="FrontCard__LeftPanel">
            <div className="FrontCard__LeftPanel__Item">Sorokin Kirill</div>
            <div className="FrontCard__LeftPanel__Item">
              Front-end Developer
            </div>
            <div className="FrontCard__LeftPanel__Item">
              Love Front-end, Workout and Hot Ones
            </div>
            <div className="FrontCard__LeftPanel__Item">
              It is never too late to be who you might have been.
            </div>
          </div>
          <div className="FrontCard__RightPanel"></div>
        </div>
        <div className="BackCard">
          <div className="BackCard__Skills">
            <ul className="BackCard__Skills__List">
              {" "}
              List of my skills:
              <li className="BackCard__Skills__List__Item">
                HTML and CSS (Pure, Styled Components and SASS + Adaptive)
              </li>
              <li className="BackCard__Skills__List__Item">Javascript</li>
              <li className="BackCard__Skills__List__Item">Typescript</li>
              <li className="BackCard__Skills__List__Item">
                React (Redux, RTK or MobX for state management)
              </li>
              <li className="BackCard__Skills__List__Item">REST API</li>
              <li className="BackCard__Skills__List__Item">
                Git for source code management
              </li>
              <li className="BackCard__Skills__List__Item">
                Working with different side libraries
              </li>
              <li className="BackCard__Skills__List__Item">
                Fluent in English
              </li>
              <li className="BackCard__Skills__List__Item">
                Know how to use Google
              </li>
              <li className="BackCard__Skills__List__Item">
                Updating...please stand by
              </li>
            </ul>
          </div>
          <div className="BackCard__ContactInfo">
            <a
              href="https://www.instagram.com/sorokin_kirilll/"
              target="_blank"
            >
              Instagram
            </a>
            <a href="https://tlgg.ru/@Sorokin39/" target="_blank">
              Telegram
            </a>
            <a
              href="https://www.linkedin.com/in/kirill-sorokin-648459240/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Sorokintech" target="_blank">
              GitHub
            </a>
            <a href="mailto:sorokintech@gmail.com" target="_blank">
              sorokintech@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
