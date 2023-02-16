import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    cercaUnLibro: "",
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Cerca</Form.Label>
              <Form.Control
                type="text"
                placeholder="cerca.."
                value={this.state.cercaUnLibro}
                onChange={(e) => this.setState({ cercaUnLibro: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.booksJson
            .filter((libroSingolo) => libroSingolo.title.toLowerCase().includes(this.state.cercaUnLibro))
            .map((libroSingolo, index) => (
              <Col xs={12} md={3} key={`libroSingolo-${index} `}>
                <SingleBook book={libroSingolo} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
