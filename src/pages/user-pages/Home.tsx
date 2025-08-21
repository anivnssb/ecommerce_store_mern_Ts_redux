import { Link } from "react-router-dom";
import ProductCard from "../../components/user-components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="acv"
          name="iphone"
          price={1522}
          stock={122}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/51g2H4pmpwL._SL1500_.jpg"
        />
      </main>
    </div>
  );
};
export default Home;
