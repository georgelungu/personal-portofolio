import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-commerce Shop Admin Platform",
      description: "Shop Manager and Sales Tracker",
      imgUrl: projImg1
  },
  {
      title: "E-commerce Shop Client Platform",
      description: "Online Store",
      imgUrl: projImg2
  },
  {
      title: "ROBOFRIENDS",
      description: "Small database with search implementation.",
      imgUrl: projImg3
  },
  {
      title: "TIC-TAC-TOE",
      description: "Play against a friend or try your chance against AI.",
      imgUrl: projImg1
  },
  {
      title: "Air BNB Clone",
      description: "Front Page",
      imgUrl: projImg2
  },
  {
      title: "Contact Form",
      description: "Contact Page",
      imgUrl: projImg3
  },
  {
      title: "MEME Generator",
      description: "MEME Database and Customization",
      imgUrl: projImg1
  },
  {
      title: "Pokemon App",
      description: "Fighting Game",
      imgUrl: projImg2
  },
  {
      title: "TO-DO List",
      description: "Front-End and Back-End Implementation",
      imgUrl: projImg3
  },
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
                <p>Here I will place a short description about my projects.</p>
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
