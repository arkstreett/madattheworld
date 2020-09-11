import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";
import MadText from "../images/madtext.png";

// STYLES
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Trans = ReactCSSTransitionGroup;

const fadeIn = (n) => {
  return {
    transitionName: `fadeIn${n}`,
    transitionEnterTimeout: 300,
    transitionAppear: true,
    transitionAppearTimeout: 0,
    transitionLeave: true,
    transitionLeaveTimeout: 500,
  };
};

function Navbar(props) {
  console.log(props);

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <div>
      <header>
        <div className="overlay"></div>
        <nav>
          <Link to="/">
            <img
              alt="Mad Text Logo"
              src={MadText}
              style={{ height: "70px", width: "200px" }}
            />
          </Link>

          <div classname="link-list">
            <ul>
              <Trans {...fadeIn(2)}>
                <li>
                  <Link to="/">Art</Link>
                </li>
              </Trans>

              <Trans {...fadeIn(4)}>
                <li className="cart">
                  <Link to="/cart">
                    <ion-icon
                      className="cart-mobile"
                      name="cart-outline"
                      style={{ height: "13px" }}
                    ></ion-icon>
                    Cart
                    <span style={{ paddingLeft: "3px", fontWeight: "bold" }}>
                      ({props.basketProps.basketNumbers})
                    </span>
                  </Link>
                </li>
              </Trans>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
