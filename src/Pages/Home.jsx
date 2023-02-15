import { createContext, useState } from "react";
import Navigationbar from "../component/Navigationbar";
import Categories from "../component/Categories";

import Header from "../component/Header";

import Slider from "../component/Slider";
import List from "../List/List";
import Login from "../Login/Login";
// import Footer from "../component/Footer/Footer";


const Home = () => {
  const [userData, setUserData] = useState(
    localStorage.getItem("user") || null
  );


  return (
   
    <>
        { userData ? <div>
          <Header />
          <Navigationbar />
          <Slider />
          <Categories />
          <List />       

          {/* <Footer/> */}
    
        </div> : <Login/>}

        </> 
      


 
  );
};

export default Home;