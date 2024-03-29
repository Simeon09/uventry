import React from "react";
import DashNav from "./DashNav/DashNav";
import "./home.css";
import cross from "../../assests/Images/cross.svg";
import history from "../../assests/Images/History.svg";
import product from "../../assests/Images/New Product.svg";
import shipped from "../../assests/Images/Shipped.svg";
import groupE from "../../assests/Images/groupE.svg";
import { HiShoppingCart } from "react-icons/hi";
import music from "../../assests/Images/music.svg";
import star from "../../assests/Images/Star (1).svg";
import stars from "../../assests/Images/Star.svg";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const data = [
    {
      name: "JAN",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "MAR",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "APR",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "JUN",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "JLY",
      uv: 490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
          <div>
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
              <div className="amountChat">
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
            <div className="salesChat">
              <span>
                <small>
                  Sales order <br />
                  <p>
                    20<sup>+5</sup>
                  </p>
                </small>
              </span>
              <span>
                <HiShoppingCart className="icon" />
                <p>view order</p>
              </span>
            </div>
          </div>
          <div className="chart">
            <div className=" invoice">
              <p>Total Profit</p>
              <select value={"year"}>
                <option value={"year"}>Month</option>
                <option value={"2000"}>Jan</option>
                <option value={"2000"}>Feb</option>
                <option value={"2000"}>Mar</option>
                <option value={"2000"}>Apr</option>
              </select>
            </div>
            <BarChart width={730} height={250} data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#FF961F" />
              <Bar dataKey="uv" fill="#365A96" />
            </BarChart>
          </div>
        </div>
        <div className=" fourthSection">
          <div className=" invoice">
            <p>Top products</p>
            <select value={"year"}>
              <option value={"year"}>year</option>
              <option value={"2000"}>2000</option>
              <option value={"2000"}>2001</option>
              <option value={"2000"}>2002</option>
              <option value={"2000"}>2003</option>
            </select>
          </div>
          <div className="products">
            <div className="subProducts">
              <div>
                <img src={music} alt="music" />
              </div>
              <div>
                <h5>Jabra</h5>
                <p> Portable earbuds</p>
                <span>
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" /> <img src={stars} alt="star" />{" "}
                  <img src={star} alt="star" />{" "}
                </span>
              </div>
            </div>
            <span>
              {" "}
              <p>
                Quantity <br /> <small>24</small>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
