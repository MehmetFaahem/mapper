import React, { useState } from "react";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function Home() {
  const [value, setValue] = useState();
  return (
    <div className="home-container">
      <div className="home-header">
        <div>
          <Image
            src="https://i.ibb.co/0jGcqcN/prop-logo-only-01-1.png"
            height="184"
            width="261"
            style={{
              marginTop: "10px",
            }}
          />
        </div>
        <div className="home-header-contents">
          <p>Rental Agreement</p>
          <h3>Rent Payment</h3>
          <h4>Post AD</h4>
          <AccountCircleIcon
            sx={{
              color: "black",
              height: "33px",
              width: "33px",
              marginLeft: "30px",
            }}
          />
        </div>
      </div>
      <div className="imager-container">
        <div>
          <Image
            src="https://i.ibb.co/dQT8hFF/unsplash-Q59-Hmz-K38e-Q.png"
            width="735"
            height="855"
          />
        </div>
        <div className="all-selectors">
          <div>
            <p className="urgent-selector">
              Select Payment{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </p>
            <div>
              <select className="cat-selector">
                {[
                  "House Rent",
                  "Society Maintenance",
                  "Office/Shop Rent",
                  "Property Token",
                  "Property Deposit",
                ].map((val, index) => (
                  <option
                    onClick={() => {
                      document.querySelector(".cat-selector").style.fontWeight =
                        "700";

                      for (let index = 0; index < 5; index++) {
                        document.querySelectorAll(".cat-opt")[
                          index
                        ].style.fontWeight = "300";
                      }
                    }}
                    className="cat-opt"
                    key={index}
                  >
                    {val}
                  </option>
                ))}
              </select>
            </div>
            <div className="flexer">
              <div>
                <p className="urgent-selector">
                  Landlord Name (As Per bank records){" "}
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
                  Landlord Number{" "}
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
                  Choose Payment Mode{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </p>
                <div className="padder">
                  <input
                    type="radio"
                    id="tobnk"
                    name="tobnk"
                    value="tobnk"
                    checked
                  />
                  <label for="tobnk">To Bank Account</label>
                </div>
                <div>
                  <input type="radio" id="toupi" name="toupi" value="toupi" />
                  <label for="toupi">To UPI id</label>
                </div>
              </div>
              <div className="numberer">
                <p className="urgent-selector">Upload Rental Agreement</p>
                <div>
                  <label for="upload" className="label-for-img">
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
              </div>
            </div>
            <div className="flexer">
              <div>
                <p className="urgent-selector">
                  Bank Account Number{" "}
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
                  Confirm Account Number{" "}
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
                  IFSC code{" "}
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
                  BHK Type{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </p>
                <div>
                  <select className="cat-selector-two">
                    {["", "", "", "", ""].map((val, index) => (
                      <option
                        onClick={() => {
                          document.querySelector(
                            ".cat-selector"
                          ).style.fontWeight = "700";

                          for (let index = 0; index < 5; index++) {
                            document.querySelectorAll(".cat-opt")[
                              index
                            ].style.fontWeight = "300";
                          }
                        }}
                        className="cat-opt"
                        key={index}
                      >
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flexer">
              <div>
                <p className="urgent-selector">
                  Property Address{" "}
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
            </div>
            <div className="ender">
              <button className="end-buttons">Save Payment Details</button>
              <button className="end-buttons-two">Continue</button>
            </div>
            <div>
              <p className="noter">
                Save your Payment details so you don&apos;t have to enter it
                again
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
