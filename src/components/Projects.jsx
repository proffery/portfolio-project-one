import { Container, Row, Col, Nav, Tab, TabPane } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

const Projects = () => {
    const projects = [{
        title: "Blog Application",
        description: "Design & Development",
        imgUrl: projImg1
    }, {
        title: "Shopping Card",
        description: "Design & Development",
        imgUrl: projImg2
    }, {
        title: "Memory Card Game",
        description: "Design & Development",
        imgUrl: projImg3
    }]
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lobortis mattis aliquam faucibus purus. Malesuada proin libero nunc consequat. Praesent elementum facilisis leo vel fringilla. Mauris rhoncus aenean vel elit scelerisque mauris. Vitae purus faucibus ornare suspendisse sed. Tempus egestas sed sed risus pretium quam vulputate. Odio aenean sed adipiscing diam donec adipiscing tristique risus. Dolor sit amet consectetur adipiscing. Sit amet consectetur adipiscing elit ut aliquam. Pharetra convallis posuere morbi leo urna molestie. Etiam sit amet nisl purus in mollis nunc sed. Tortor id aliquet lectus proin.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <TabPane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                   <ProjectCard key={'project' + index} {...project} /> 
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                                <TabPane eventKey='second'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum temporibus quas amet cupiditate totam, beatae aut iusto vitae impedit quae velit, qui, voluptatibus cum quia iste accusantium praesentium! Nisi?
                                </TabPane>
                                <TabPane eventKey='third'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius architecto commodi, blanditiis molestias quas officiis aut magni, odio ea vel eligendi ad rem vitae ducimus repellendus autem ullam. Nemo!
                                </TabPane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}

export { Projects }