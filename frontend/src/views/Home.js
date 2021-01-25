import * as React from 'react';
import Product from '../components/Product';
import products from '../products';

const Home = () => {
  return (
    <React.Fragment>
      {products.map(({ _id, ...productProps }) => (
        <Product key={_id} {...productProps} />
      ))}
    </React.Fragment>
  );
};

export default Home;
