import React from "react";
import DashNav from "../DashNav/DashNav";
import cross from "../../../assests/Images/cross.svg";
import "./sass/Buisness.css";
import sidehustle from "../../../assests/Images/sidehustle logo.png";
import instagram from "../../../assests/Images/instagram.png";
import twitter from "../../../assests/Images/twitter.svg";
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
        <div className="sectionTwo">
          <div className="firstSubsection">
            <div className="upperSection">
              {" "}
              <span>
                <img src={sidehustle} alt="side" />
                <h4>Hustle Tech</h4>
                <p>Digitally yours!</p>
              </span>
              <div className="info">
                <span>
                  <p>Email</p>
                  <p>phone</p>
                  <p>city</p>
                  <p>store iD</p>
                </span>
                <span>
                  <p>hustletech@gmail.com</p>
                  <p>+234 816 251 0181</p>
                  <p>lagos</p>
                  <p>HST00BC4312</p>
                </span>
              </div>
            </div>
            <div className="lowerSection">
              <div>
                {" "}
                <img src={instagram} alt="instagram" />
                <p>hustletech</p>
              </div>
              <div>
                {" "}
                <img src={twitter} alt="twitter" />
                <p>hustletech</p>
              </div>
            </div>
          </div>
          <div className="secondSection">
            <span>
              <p>General</p>
              <p>Activities</p>
              <p>Transactions</p>
            </span>
            <div className="formcontrol">
              <form>
                <label for="fname">First Name</label>
                <br />
                <input type="text" id="fname" name="fname" />
                <br />
                <label for="lname">Email Address</label>
                <br />
                <input type="text" id="lname" name="lname" />
                <br/>
                <label>Phone Number</label>
                <br />
                <input type="number" />
              </form>
              <form>
                <label for="lastname">Last Name</label>
                <br />
                <input type="text" id="lastname" name="lastname" />
                <br />
                <label for="cityname">City</label>
                <br />
                <input type="text" id="cityname" name="lname" /><br/>
                <label for="storename">Store ID</label>
                <br />
                <input type="text" id="storename" name="storename" />
              </form>
            </div>
            <span className="control">
              
              <div><button className="controlBtn">Save</button></div> <div><button>Cancel</button></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buisness;
