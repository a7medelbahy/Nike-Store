import Blogs from "./components/blogs/Blogs";
import Cart from "./components/cart/Cart";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Hightlight from "./components/hightlight/Hightlight";
import Landing from "./components/landing/Landing";
import Popular from "./components/popular/Popular";
import Top from "./components/top/Top";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import loadingImg from "./assets/nike-gif.gif";

const App = () => {
  const [loading, setLoading] = useState(false);
  const cartShow = useSelector((state) => state.cart.show);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const styling = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  return (
    <>
      {loading ? (
        <img
          src={loadingImg}
          className="img-fluid"
          alt="loading"
          style={styling}
        ></img>
      ) : (
        <div>
          <Landing />
          {cartShow && <Cart />}
          <Popular />
          <Hightlight />
          <Top />
          <Featured />
          <Blogs />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
