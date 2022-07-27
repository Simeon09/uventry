import React from "react";
import DashNav from "./DashNav/DashNav";
import "./home.css";
import cross from "../../assests/Images/cross.svg";
import history from "../../assests/Images/History.svg";
import product from "../../assests/Images/New Product.svg";
import shipped from "../../assests/Images/Shipped.svg";
import groupE from "../../assests/Images/groupE.svg";
import { HiShoppingCart} from "react-icons/hi"

const Home = () => {
  return (
    <div className="hom">
      <DashNav />
      <div className="content">
        <div className="firstSection">
          <span>
            {" "}
            <p>Dashboard</p>{" "}
          </span>
          <span>
            <div>
              <img src={cross} alt="cross" />
            </div>{" "}
            <div>New</div>
          </span>
        </div>
        <div className="secondSection">
          <span className="delivery">
            <small>
              <img src={history} alt="history" />
            </small>{" "}
            <p>
              Required Invoice <br /> <span>10</span>{" "}
            </p>{" "}
          </span>
          <span className="delivery">
            {" "}
            <small>
              <img src={product} alt="history" />
            </small>{" "}
            <p>
              Required packing <br /> <span>5</span>
            </p>
          </span>
          <span className="delivery">
            {" "}
            <small>
              <img src={shipped} alt="history" />
            </small>{" "}
            <p>
              Required Delivery <br /> <span>3</span>
            </p>
          </span>
        </div>
        <div className="thirdSection">
          <div className="mainThird">
            <div className=" invoice">
              
                <p>Invoice</p>
              
                              <select value={"year"}>
                  <option value={"year"}>year</option>
                  <option value={"2000"}>2000</option>
                  <option value={"2000"}>2001</option>
                  <option value={"2000"}>2002</option>
                  <option value={"2000"}>2003</option>
                </select>
              
            </div>
            <div className='amountChat'>
              <text>
                {" "}
                <p>
                  Overdue Invoice <br />
                  <span>20</span>
                </p>
                <p>
                  Overdue amount <br />
                  <span>$123,099</span>
                </p>
              </text>
              <span>
                <img src={groupE} alt="elispse" />
              </span>
            </div>
          </div>
          <div className="salesChat"><span><small>Sales order <br/><p>20<sup>+5</sup></p></small></span>
          <span><HiShoppingCart className="icon" /><p>view order</p></span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
