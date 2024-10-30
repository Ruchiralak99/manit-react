import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header">
      <div className={" " + props.hclass}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center w-100">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none">
                <MobileMenu />
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/home">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="w-50 h-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-1 col-1 d-flex justify-content-end">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Manifesto
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Events
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Blog
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact
                      </Link>
                    </li>
                   
                  </ul>
                </div>
               
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
