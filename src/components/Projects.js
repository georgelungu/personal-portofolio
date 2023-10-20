import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import contactForm from "../assets/img/contact-form-css.png"
import memeGenerator from "../assets/img/meme-generator.png"
import pokemonApp from "../assets/img/pokemon-app.png"
import roboFriends from "../assets/img/robo-friends.png"
import ticTacToe from "../assets/img/tic-tac-toe.png"
import airBnbClone from "../assets/img/air-bnb-clone.png"
import shopAdmin from "../assets/img/shop-admin.png"
import shopClient from "../assets/img/shop-client.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce Shop Admin Platform",
      description: "Shop Manager and Sales Tracker",
      imgUrl: shopAdmin,
      link: "https://shop-admin-dun.vercel.app/e7f0e0ee-9931-4b0f-9425-a9aa045f1b15"
  },
  {
      title: "E-commerce Shop Client Platform",
      description: "Online Store",
      imgUrl: shopClient,
      link: "https://shop-client-one.vercel.app/"
  },
  {
      title: "ROBOFRIENDS",
      description: "Small database with search implementation.",
      imgUrl: roboFriends,
      link: "https://robo-friends-six.vercel.app/"
  },
  {
      title: "TIC-TAC-TOE",
      description: "Play against a friend or try your chance against AI.",
      imgUrl: ticTacToe,
      link: "https://tic-tac-toe-gamma-snowy.vercel.app/"
  },
  {
      title: "Air BNB Clone",
      description: "Front Page",
      imgUrl: airBnbClone,
      link: "https://air-bnb-clone-weld.vercel.app/"
  },
  {
      title: "Contact Form",
      description: "Contact Page",
      imgUrl: contactForm,
      link: "https://contact-form-css.vercel.app/"
  },
  {
      title: "MEME Generator",
      description: "MEME Database and Customization",
      imgUrl: memeGenerator,
      link: "https://meme-generator-six-ashen.vercel.app/"
  },
  {
      title: "Pokemon App",
      description: "Fighting Game",
      imgUrl: pokemonApp,
      link: "https://pokemon-app-kappa-lac.vercel.app/"
  },
  {
      title: "TO-DO List",
      description: "Front-End and Back-End Implementation",
      imgUrl: projImg3,
      link: "https://pokemon-app-kappa-lac.vercel.app/"
  },
  {
    title: "NASA App",
    description: "API Call to NASA Server",
    imgUrl: projImg1,
    link: "https://pokemon-app-kappa-lac.vercel.app/"
}
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>From CSS exercises, static web-sites and basic API calls to fullstack web-apps with front-end and back-end</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Page Two Projects</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Page Three Projects</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
