import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import Rating from '../components/Rating';

const ProductDetails = ({ match }) => {
  const [product, setProduct] = React.useState({});
  const param = parseInt(match.params.id);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${param}`);

      setProduct(data);
    };
    fetchProduct();
  }, [param]);
  const { Item } = ListGroup;
  // const product = products
  //   .flatMap((product) => product.items)
  //   .find((item) => item.id === param);

  return (
    <React.Fragment>
      <Link className='btn btn-dark my-3' to='/home'>
        Go Back
      </Link>
      <Row>
        <Col md={3}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <Item style={{ textAlign: 'center' }}>
              <h3>{`${product.brand} ${product.name}`}</h3>
            </Item>
            <Item style={{ textAlign: 'center' }}>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Item>
            <Item style={{ textAlign: 'center' }}>Price: ${product.price}</Item>
            <Item style={{ textAlign: 'center' }}>
              Description: {product.description}
            </Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </Item>
            </ListGroup>
            <ListGroup variant='flush'>
              <Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.inStock === true ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </Item>
              <Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.inStock === false}
                >
                  Add to Cart
                </Button>
              </Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductDetails;
