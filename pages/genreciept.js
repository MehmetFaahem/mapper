import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const Header = () => {
  return (
    <div className="home-header">
      <div>
        <img
          src="https://i.ibb.co/0jGcqcN/prop-logo-only-01-1.png"
          className="logo"
        />
      </div>
      <div className="ti-subti">
        <h1>Generate free Rent receipts</h1>
        <h2>
          Generate rent receipts instantly by filling in the details Below
        </h2>
      </div>
      <div className="home-header-contents">
        <div className="menus">
          <p>Post AD</p>
          <h3>LOGIN</h3>
        </div>
        <MenuIcon
          sx={{
            color: "black",
            height: "33px",
            width: "33px",
          }}
          className="menuIcon"
        />
      </div>
    </div>
  );
};

export default function GenReciept() {
  const [category, setCategory] = useState("Property Token");
  const [value, setValue] = useState();

  return (
    <div className="home-container">
      <Header />
      <div className="imager-container">
        <div>
          <Image
            src="https://i.ibb.co/dQT8hFF/unsplash-Q59-Hmz-K38e-Q.png"
            width="735"
            height="855"
            className="imagers"
          />
        </div>
        <div className="condainer">
          <div className="all-selectors">
            <div>
              <p className="reciept-title">Rental Receipt</p>
            </div>
            <div>
              <div className="flexer">
                <div>
                  <p className="urgent-selector">
                    Rent Amount{" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </p>
                  <div>
                    <input className="inputter-payer" />
                  </div>
                </div>
                <div>
                  <p className="urgent-selector">
                    Rented Property address{" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </p>
                  <div>
                    <input className="inputter-payer" />
                  </div>
                </div>
              </div>
              <div className="flexer">
                <div>
                  <p className="urgent-selector">
                    Landlord Name{" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </p>
                  <div>
                    <input className="inputter-payer" />
                  </div>
                </div>
                <div>
                  <p className="urgent-selector">Landlord PAN(optional)</p>
                  <div>
                    <input className="inputter-payer" />
                  </div>
                </div>
                {/* <div className="numberer">
                  <p className="urgent-selector">Upload Rental Agreement</p>
                  <div>
                    <label htmlFor="upload" className="label-for-img">
                      <CloudUploadIcon
                        sx={{
                          color: "rgba(187, 187, 187, 1)",
                          fontSize: "29px",
                          marginRight: "20px",
                        }}
                      />
                      <span>Choose file</span>
                    </label>
                    <input type="file" name="photo" id="upload" />
                  </div>
                </div> */}
              </div>
              <div className="flexer">
                <div>
                  <p className="urgent-selector">
                    Receipt start date(dd-mm-yy){" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </p>
                  <div>
                    <div className="date-picker-reciept">
                      <input type="date" />
                      <CalendarMonthIcon
                        sx={{
                          fontSize: 23,
                          color: "black",
                          fontWeight: "700",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="urgent-selector">
                    Receipt end date(dd-mm-yy){" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </p>
                  <div>
                    <div className="date-picker-reciept">
                      <input type="date" />
                      <CalendarMonthIcon
                        sx={{
                          fontSize: 23,
                          color: "black",
                          fontWeight: "700",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="reciept-title">Tenant Details</p>
              </div>
              <div className="flexer">
                <div>
                  <p className="urgent-selector">
                    Tenant name{" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </p>
                  <div>
                    <input className="inputter-payer" />
                  </div>
                </div>
                <div className="numberer">
                  <p className="urgent-selector">
                    Tenant mobile number{" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </p>
                  <div>
                    <PhoneInput
                      placeholder=""
                      value={value}
                      onChange={setValue}
                      defaultCountry="IN"
                    />
                  </div>
                </div>
              </div>
              <div className="flexer">
                <div>
                  <p className="urgent-selector">
                    Email to receive receipt PDF{" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </p>
                  <div>
                    <input className="inputter-payer" />
                  </div>
                </div>
              </div>
              <div className="ender">
                <button className="continue-button">Continue</button>
              </div>
              <div>
                <p className="noter">
                  <span>
                    <Checkbox size="small" />
                  </span>
                  I agree to propp44 T&C, Privacy policy, & Cookie Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
