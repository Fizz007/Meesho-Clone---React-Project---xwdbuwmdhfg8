import React, { useContext } from "react";
import "../Product/Product.css";
import { FaRegStar } from "react-icons/fa";

import { CartCoontext } from "../Context/Context";


const Product = (props) => {
  const Globalstate = useContext(CartCoontext)
  const dispatch = Globalstate.dispatch;

  const { item  } = props;
  var qty = "quantity";
  var value = 1;
  item[qty] = value;

  return (
    <div>
      
      <div className="each-item">
        <div className="img-wrapper">
          <img src={item.image} alt="product-img" />
        </div>
                <div className="content-wrapper">
                <h3 className="brand-name">{item.title}</h3>
                {/* <h4 className="brand-desc"> {item.description}</h4> */}
                        <p className="price_rate">
                            <span className="b-d-price">Rs. {item.price}</span>

                            <div className="bg"><span className="b-rating">{item.rating.rate} <FaRegStar className="star" size={15}/></span></div>
                        </p>
                            <button
                            className='add-to-cart-btn'
                     
                            onClick={()=> dispatch({type:'ADD', payload: item })}
                         
                            >
                            Add to Cart
                            </button>
                </div>
      </div>
    </div>
  );
};

export default Product;
