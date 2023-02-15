import React, { useContext, useState } from "react";
import meesho from "../img/meesho.png";
import search from "../img/search.png";
import mobile from "../img/mobile.png";
import user from "../img/user.png";
// import cart from "../img/cart.png";

import { RxCross2 } from "react-icons/rx";
import { Badge } from "@mui/material";

import { GiShoppingCart } from "react-icons/gi";

import { useNavigate } from "react-router-dom";
import { CartCoontext } from "../Context/Context";

const Header = () => {
  const [show, setShow] = useState("none");
  const [playstore, setPlaystore] = useState(false);
  const [profile, setProfile] = useState(false);
  
  const Globalstate = useContext(CartCoontext);

  const navigate = useNavigate();

  const localData = JSON.parse(localStorage.getItem("user") || null);
  // console.log(localData)
  function valuee(e) {
    if (e.target.value) {
      setShow("block");
    } else {
      setShow("none");
    }
  }

  function store() {
    setPlaystore(!playstore);
  }

  function openLoginbtn() {
    setProfile(!profile);
  }

  function handleuser(){
    if(localData.logInn || localData === null){
      localStorage.removeItem("user");
      navigate("/login")  
      
    }else{
      navigate("/login")
    }
    
  }

  return (
    <div name="home" className="pos">
      <header className="headder">
        <div className="headerLeft">
          <div className="logoContainer">
            <img src={meesho} onClick={() => navigate("/")} alt="" />
          </div>
          <div className="searchInputContainer">
            <div className="searchIcon">
              <img src={search} />
            </div>
            <form action="">
              <input
                type="text"
                onKeyDown={valuee}
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="inputSearch"
              />
            </form>
            <div className="inputCloseSearch">
              <RxCross2 style={{ display: ` ${show}` }} />
            </div>
          </div>
        </div>

        <div className="headerRight">
          <div className="downloadContainer">
            <div className="mobileIcon">
              <img src={mobile} />
            </div>
            <p onMouseEnter={store} onMouseLeave={store}>
              Download App
            </p>

            {playstore && (
              <div style={{ display: "block" }}>
                <div className="downloadHoverBtnContainer">
                  <h3>Download From</h3>
                  <a href="" className="downloadBtn">
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" />
                  </a>
                  <a href="" className="downloadBtn">
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="becomeSupplierContainer">
            <p>Become a Supplier</p>
          </div>

          <div className="profileAndCart">
            <div className="profileContainer">
              <div className="profileIcon">
                <img src={user} onClick={openLoginbtn} />
              </div>
              <p onClick={openLoginbtn}>Profile</p>

              {profile && (
                <div style={{ display: "block" }}>
                  <div className="profileHoverBtnContainer">
                    <h3>Hello {localData && localData.logInn ? localData.name : 'User'}</h3>
                    <h5> {localData && localData.logInn ? 'Welcome to Meesho' : 'Access your account' }</h5>
                    <button
                      onClick={handleuser}
                      className="login_btn"
                    >
                      Log {localData.logInn ? "out" : "in"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="CartContainer">
              <div className="CartIcon">
                <Badge
                  color="secondary"
                  badgeContent={Globalstate.state.length}
                >
                  <GiShoppingCart size={28} onClick={() => navigate("/cart")} />
                </Badge>
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
