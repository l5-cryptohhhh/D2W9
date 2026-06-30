import { Container, Row, Col, Card } from 'react-bootstrap';
import books from '../data/fantasy.json';

function ListBooks() {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col xs={12} sm={4} key={book.asin} className="mb-4">
            <Card className="border-0 h-100">
              <Card.Img variant="top" src={book.img} />
              <Card.Body className="px-0">
                <Card.Text>{book.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListBooks;
