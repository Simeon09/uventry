import React from "react";
import DashNav from "../DashNav/DashNav";
import cross from "../../../assests/Images/cross.svg";
import "./sass/Buisness.css";
import sidehustle from '../../../assests/Images/sidehustle logo.png'
import instagram from '../../../assests/Images/instagram.png'
import twitter from '../../../assests/Images/twitter.svg'
const Buisness = () => {
  return (
    <div className="business">
      <DashNav />

      <div className="bContents">
        <div className="firstSection">
          <span>
            {" "}
            <p>Business</p>
            <p> &#62; </p>
            <p> Hustle Tech</p>{" "}
          </span>
          <span>
            <div>
              <img src={cross} alt="cross" />
            </div>{" "}
            <div>New</div>
          </span>
        </div>
        <div>
          <div>
            <div> <span><img src={sidehustle} alt='side'/>
            <h4>Hustle Tech</h4>
            <p>digitally yours!</p>
            </span> 
            <span>
              <p>Email</p>
              <p>hustletech@gmail.com</p>
            </span>
            <span>
              <p>phone</p>
              <p>+234 816 251 0181</p>
            </span>
            <span>
              <p>city</p>
              <p>lagos</p>
            </span>
            <span>
              <p>store iD</p>
              <p>HST00BC4312</p>
            </span>
            </div>
            <div>
              <div> <img src={instagram} alt='instagram'/>
              <p>hustletech</p></div>
              <div> <img src={twitter} alt='twitter'/>
              <p>hustletech</p></div>
               </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Buisness;
