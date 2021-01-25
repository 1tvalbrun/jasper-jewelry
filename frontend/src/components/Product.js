import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ items, title }) => {
  const { Body, Img, Title, Text } = Card;
  return (
    <React.Fragment>
      <h1>{title.toUpperCase()}</h1>
      <Row>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <Col key={item.id}>
              <Card className='my-3 p-3 rounded text-center'>
                <Link to={`/product/${item.id}`}>
                  <Img src={item.image} variant='top' />
                </Link>
                <Body>
                  <Link to={`/product/${item.id}`}>
                    <Title as='div'>
                      <strong>
                        {item.brand} {item.name}
                      </strong>
                    </Title>
                  </Link>
                  <Text as='div'>
                    <Rating
                      value={item.rating}
                      text={`${item.numReviews} ratings`}
                    />
                  </Text>
                </Body>
              </Card>
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};

export default Product;
