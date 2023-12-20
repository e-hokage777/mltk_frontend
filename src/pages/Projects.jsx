import { Container, Row, Col } from "react-bootstrap";

// projects
import DisasterTweets from "../components/projects/DisasterTweets.jsx";
import AnimeFaceGenerator from "../components/projects/AnimeFaceGenerator.jsx";


function Holder(props) {
  if (Array.isArray(props.children)) {
    return (
      <Container fluid>
        <Row>
          {props.children.map((child, index) => (
            <Col key={index} lg={6} md={6} xs={12} className="p-2">
              {child}
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  else{
    return (
      <Container fluid>
        <Row>
        <Col lg={4} md={6} xs={12}>
              {props.children}
            </Col>
        </Row>
      </Container>
    )
  }
}

export default function ProjectsPage() {
  return (
    <Holder>
      <DisasterTweets />
      <AnimeFaceGenerator />
    </Holder>
  );
}
