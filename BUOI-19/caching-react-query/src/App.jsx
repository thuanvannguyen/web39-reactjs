import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import ListingProduct from './components/ListingProduct';
import AddProduct from './components/AddProduct';

const App = () => {
  return (
    <div className='listing-product mt-4'>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <AddProduct placement="end" name="Add Product"/>
            <ListingProduct/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App