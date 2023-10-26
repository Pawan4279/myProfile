import logo from "./logo.svg";
import "./App.css";
import { getString } from "./utils/utils";

function App() {
  return (
    <div classNameName="App">
      <div className="background gradient">
        {/* <!-- Delete if animation
        <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      --> */}
      </div>
      <div className="page">
        <header>
          <nav>
            <a href="#about" className="selected" id="getAbout">
              <span className="fas fa-user"></span>
              <span className="link">{getString("about")}</span>
            </a>
            <a href="#resume" id="getResume">
              <span className="fas fa-file"></span>
              <span className="link">{getString("resume")}</span>
            </a>
            <a href="#contact" id="getContact">
              <span className="fas fa-at"></span>
              <span className="link">{getString("contact")}</span>
            </a>
          </nav>
        </header>
        <main>
          <section id="presentation" className="profile">
            <div className="profile-background"></div>
            <div>
              <div className="profile-image">
                <img
                  src="https://i.ibb.co/JHjYgmv/profile.png"
                  alt="Ryan Adlard"
                />
              </div>
              <h1 className="profile-name" id="nombre">
                {getString("name")}
              </h1>
              <h2 className="profile-profession">{getString("webDesigner")}</h2>
              <div className="profile-social" id="profile-social">
                <a href="www.dribbble.com" className="fab fa-dribbble"></a>
                <a href="www.twitter.com" className="fab fa-twitter"></a>
                <a href="www.github.com" className="fab fa-github"></a>
                <a href="www.spotify.com" className="fab fa-spotify"></a>
                <a
                  href="www.stackoverflow.com"
                  className="fab fa-stack-overflow"
                ></a>
              </div>
            </div>
            <div className="profile-buttons">
              <a href="/myCV.txt" download>
                {getString("downlodeCv")}<i className="fas fa-download"></i>
              </a>
              <a href="#contact">
              {getString("cONTACTME")} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </section>
          <section id="about" className="about view">
            <article className="about-aboutMe">
              <h3 className="title">{getString("aboutMe")}</h3>
              <div className="line-left">
                <p>
                  {getString("myInto")}
                </p>
                <div>
                  <div>
                    <span>{getString("ageWithDot")} </span>{getString("ageInNumber")}
                  </div>
                  <div>
                    <span>{getString("residance")} </span>{getString("india")}
                  </div>
                  <div>
                    <span>{getString("lookingFor")} </span>{getString("available")}
                  </div>
                  <div>
                    <span>ADDRESS . . . . </span>California, USA
                  </div>
                </div>
              </div>
            </article>
            <article className="about-services">
              <h3 className="title">My Services</h3>
              <div className="line-left">
                <article className="line-down">
                  <div className="fas fa-code"></div>
                  <h4>WEB DEVELOPMENT</h4>
                  <p>
                    Modern and mobile-ready website that will help you reach all
                    of your marketing.
                  </p>
                </article>
                <article className="line-down">
                  <div className="fas fa-music"></div>
                  <h4>MUSIC WRITING</h4>
                  <p>
                    Music copying, transcription, arranging and composition
                    services.
                  </p>
                </article>
                <article>
                  <div className="fas fa-bullhorn"></div>
                  <h4>ADVETISING</h4>
                  <p>
                    Advertising services include television, radio, print, mail
                    and web.
                  </p>
                </article>
                <article>
                  <div className="fas fa-gamepad"></div>
                  <h4>GAME DEVELOPMENT</h4>
                  <p>
                    Developing memorable and unique mobile android, ios games.
                  </p>
                </article>
              </div>
            </article>
          </section>
          <section id="resume" className="resume">
            <h3 className="title">Resume</h3>
            <article className="resume-lines">
              <section className="resume-line line-left">
                <h4 className="line-down">
                  {" "}
                  <i className="fas fa-briefcase"></i> Experience
                </h4>
                <article className="line-down">
                  <div className="date active">2013 - PRESENT</div>
                  <h5 className="name">ART DIRECTOR</h5>
                  <h6 className="company">FACEBOOK INC.</h6>
                  <p>
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                </article>
                <article className="line-down">
                  <div className="date">2011 - 2012</div>
                  <h5 className="name">FRONT-END DEVELOPER</h5>
                  <h6 className="company">GOOGLE INC.</h6>
                  <p>
                    Monitored technical aspects of the front-end delivery for
                    several projects.
                  </p>
                </article>
                <article>
                  <div className="date">2009 - 2010</div>
                  <h5 className="name">SENIOR DEVELOPER</h5>
                  <h6 className="company">ABC INC.</h6>
                  <p>Optimize website performance using latest technology.</p>
                </article>
              </section>
              <section className="resume-line line-left">
                <h4 className="line-down">
                  {" "}
                  <i className="fas fa-university"></i> Education
                </h4>
                <article className="line-down">
                  <div className="date">2006 - 2008</div>
                  <h5 className="name">ART DIRECTOR</h5>
                  <h6 className="company">NEW YORK</h6>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri
                  </p>
                </article>
                <article className="line-down">
                  <div className="date">2005 - 2006</div>
                  <h5 className="name">PROGRAMMING COURSE</h5>
                  <h6 className="company">PARIS</h6>
                  <p>Coursework - Git, WordPress, Javascript, iOS, Android.</p>
                </article>
                <article>
                  <div className="date">2004 - 2005</div>
                  <h5 className="name">WEB DESIGN COURSE</h5>
                  <h6 className="company">LONDON</h6>
                  <p>
                    Converted Photoshop layouts to web pages using HTML, CSS,
                    and JavaScript.
                  </p>
                </article>
              </section>
            </article>
            <article className="resume-skills">
              <h3 className="title">My Skills</h3>
              <div>
                <section className="line-left">
                  <h4 className="line-down">
                    {" "}
                    <i className="fas fa-tv"></i> DESIGN
                  </h4>
                  <div className="line-down">
                    <div>Web Design</div>
                    <div>
                      <div style={{width: "70%"}}></div>
                    </div>
                  </div>
                  <div className="line-down">
                    <div>Write Music</div>
                    <div>
                      <div style={{width: "76%"}}></div>
                    </div>
                  </div>
                  <div className="line-down">
                    <div>Photoshop</div>
                    <div>
                      <div style={{width: "66%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div>Graphic Design</div>
                    <div>
                      <div style={{width: "86%"}}></div>
                    </div>
                  </div>
                </section>
                <section className="line-left">
                  <h4 className="line-down">
                    <i className="fas fa-code"></i> CODING
                  </h4>
                  <div className="line-down">
                    <div>WordPress</div>
                    <div>
                      <div style={{width: "50%"}}></div>
                    </div>
                  </div>
                  <div className="line-down">
                    <div>PHP/MYSQL</div>
                    <div>
                      <div style={{width: "40%"}}></div>
                    </div>
                  </div>
                  <div className="line-down">
                    <div>Angular/JavaScript</div>
                    <div>
                      <div style={{width: "95%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div>HTML/CSS</div>
                    <div>
                      <div style={{width: "100%"}}></div>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </section>
          <section id="contact" className="contact">
            <h3 className="title">Get in Touch</h3>
            <div className="contact-information line-left">
              <div>
                <span>ADDRESS . . . . </span> California, USA
              </div>
              <div>
                <span>EMAIL . . . . </span> adlard@example.com
              </div>
              <div>
                <span>PHONE . . . . </span> +123 654 78900
              </div>
              <div>
                <span>FREELANCE . . . . </span> Available
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
