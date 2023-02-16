import { Component } from "react";
import SingleBook from "./SingleBook";
import { Row, Col, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    cercaUnLibro: "",
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Cerca</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="cerca.."
                  value={this.state.cercaUnLibro}
                  onChange={(e) => this.setState({ cercaUnLibro: e.target.value })} //posso fare un button e dire al bottone di leggere lo stato
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          {this.props.booksJson //quando cerco nell'input appaiono solo i libri con il titolo che ho scritto
            .filter((libroSingolo) => libroSingolo.title.toLowerCase().includes(this.state.cercaUnLibro)) //predicate function che tirorna true o false. Filter ritorna un'array

            .map((libroSingolo, index) => (
              <Col xs={12} md={3} key={`libroSingolo-${index}`}>
                <SingleBook booksJson={libroSingolo} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
