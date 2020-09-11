import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
// import Navbar from './Navbar';

import "react-toastify/dist/ReactToastify.css";

import YungLeanPoster from "../images/image0.png";
import FuturePoster from "../images/image1.png";
import DrakeoPoster from "../images/image2.png";
import PostPoster from "../images/image3.png";
import ThugPoster from "../images/image4.png";
import FrankPoster from "../images/image5.png";
import DuggPoster from "../images/image6.png";
import BrentPoster from "../images/brentfaiyazposter.png";
import UziPoster from "../images/uziposter.jpg";
import CartiPoster from "../images/cartiposter.jpg";
import PeepPoster from "../images/peepposter.jpg";
import JuicePoster from "../images/juicewrldposter.jpg";
import PharrellPoster from "../images/pharrelposter.jpg";

toast.configure();

function Cart({ basketProps, productQuantity, clearProduct }) {
  console.log(basketProps);

  // const description = "MAD @ THA WORLD"

  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart);
  });

  async function handleToken(token) {
    const response = await axios.post(
      "https://wb1t9.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;

    console.log("Response:", response.data, basketProps);

    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  // ART IMAGE SELECTOR FUNCTION FOR CART
  const productImages = (product) => {
    if (product.tagName === "YungLeanPoster") {
      return YungLeanPoster;
    } else if (product.tagName === "FuturePoster") {
      return FuturePoster;
    } else if (product.tagName === "DrakeoPoster") {
      return DrakeoPoster;
    } else if (product.tagName === "PostPoster") {
      return PostPoster;
    } else if (product.tagName === "ThugPoster") {
      return ThugPoster;
    } else if (product.tagName === "FrankPoster") {
      return FrankPoster;
    } else if (product.tagName === "DuggPoster") {
      return DuggPoster;
    } else if (product.tagName === "BrentPoster") {
      return BrentPoster;
    } else if (product.tagName === "UziPoster") {
      return UziPoster;
    } else if (product.tagName === "CartiPoster") {
      return CartiPoster;
    } else if (product.tagName === "PeepPoster") {
      return PeepPoster;
    } else if (product.tagName === "JuicePoster") {
      return JuicePoster;
    } else if (product.tagName === "PharrellPoster") {
      return PharrellPoster;
    }
  };

  productsInCart = productsInCart.map((product, index) => {
    console.log("My product is", product);

    return (
      <Fragment key={index}>
        <div className="product">
          <ion-icon
            onClick={() => clearProduct(product.tagName)}
            name="close-circle"
          ></ion-icon>
          <img alt="Product Images" src={productImages(product)} />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price}.00</div>
        <div className="quantity">
          <ion-icon
            onClick={() => productQuantity("decrease", product.tagName)}
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            onClick={() => productQuantity("increase", product.tagName)}
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price}.00</div>
      </Fragment>
    );
  });

  // const StripeMethod = productsInCart.map((product) => {

  // return (
  // <div>
  //     <StripeCheckout
  //         stripeKey="pk_test_jrlKaV1G8hfGhQDHB9yPpBay00hW7wGnBA"
  //         token={handleToken}
  //         amount={product.price * 100}
  //         name="MAD"
  //         billingAddress
  //         shippingAddress
  //     />
  // </div>
  //     );
  // })
  const [product] = React.useState({
    price: `${basketProps.cartCost}`,
    description: "Swag hehehe...",
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">Product</h5>
        <h5 className="price sm-hide">Price</h5>
        <h5 className="quantity">Quantity</h5>
        <h5 className="total">Total</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Total</h4>
        <h4 className="basketTotal">${basketProps.cartCost}.00</h4>
      </div>
      <StripeCheckout
        stripeKey="pk_test_jrlKaV1G8hfGhQDHB9yPpBay00hW7wGnBA"
        token={handleToken}
        amount={product.price * 100}
        name="Mad At The World"
        billingAddress
        shippingAddress
        style={{ marginTop: "30px" }}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
