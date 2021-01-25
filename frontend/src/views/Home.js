import * as React from 'react';
import Product from '../components/Product';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <React.Fragment>
      {products.map(({ _id, ...productProps }) => (
        <Product key={_id} {...productProps} />
      ))}
    </React.Fragment>
  );
};

export default Home;
