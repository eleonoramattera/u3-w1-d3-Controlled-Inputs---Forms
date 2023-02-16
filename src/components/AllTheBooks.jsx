import { Container, Row, Col, Card } from "react-bootstrap";
import romance from "../data/romance.json";

const AllTheBooks = () => {
  return (
    <Container style={{ width: "100%" }}>
      <Row>
        {romance.map((libro, index) => (
          <Col xs={12} md={4}>
            <Card style={{ width: "18rem" }} key={`libro-${index}`}>
              <Card.Img variant="top" src={libro.img} />
              <Card.Body>
                <Card.Title> {libro.title}</Card.Title>
                <Card.Text>{libro.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
