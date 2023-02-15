import { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { cartActions } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [fixedNav, setFixedNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    });
  });
  return (
    <div className={fixedNav ? "navbar fixed-nav py-3" : "navbar py-3"}>
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="logo">
            <img src={Logo} className="img-fluid" alt="logo" />
          </div>
          <div className="nav-icons">
            <ul className="d-flex align-items-center gap-3">
              <li>
                <button>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </li>
              <li>
                <button>
                  <i className="fa-regular fa-heart"></i>
                </button>
              </li>
              <li>
                <button
                  onClick={() => dispatch(cartActions.showCart())}
                  className="cart-icon position-relative"
                >
                  <i className="fa-solid fa-cart-shopping"></i>{" "}
                  <span className="cart-num fw-bold d-flex justify-content-center align-items-center position-absolute rounded-circle">
                    {cartItems.length}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
