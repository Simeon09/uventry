import React from "react";
import DashNav from "./DashNav/DashNav";
import "./home.css";
import cross from "../../assests/Images/cross.svg";
import history from "../../assests/Images/History.svg";
import product from "../../assests/Images/New Product.svg";
import shipped from "../../assests/Images/Shipped.svg";
import groupE from "../../assests/Images/groupE.svg";
import { HiShoppingCart } from "react-icons/hi";
import PureComponent from "react";
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
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
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
            
              <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
