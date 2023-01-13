import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
        <h1>Payment</h1>
        <h2>Make Payment of your properties here</h2>
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

export default function Home() {
  const [category, setCategory] = useState("Property Token");
  const [value, setValue] = useState();

  const [mode, setMode] = useState("tobnk");

  if (category == "Property Token" || category == "Property Deposit") {
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
                  <select
                    className="cat-selector"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {[
                      "House Rent",
                      "Society Maintenance",
                      "Office/Shop Rent",
                      "Property Token",
                      "Property Deposit",
                    ].map((val, index) => (
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
                    <div className="mode-checker">
                      <div className="padder">
                        <input
                          type="radio"
                          id="tobnk"
                          name="tobnk"
                          value="tobnk"
                          checked={mode == "tobnk"}
                          onChange={(e) => setMode(e.target.value)}
                        />
                        <label htmlFor="tobnk">To Bank Account</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="toupi"
                          name="toupi"
                          value="toupi"
                          checked={mode == "toupi"}
                          onChange={(e) => setMode(e.target.value)}
                        />
                        <label htmlFor="toupi">To UPI id</label>
                      </div>
                    </div>
                  </div>
                  <div className="numberer">
                    <p className="urgent-selector">
                      Property Address
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
                {mode == "tobnk" ? (
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
                ) : null}
                <div className="flexer">
                  <div>
                    <p className="urgent-selector">
                      {mode == "tobnk" ? "IFSC code" : "Enter UPI Id "}{" "}
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
                      Tenant&apos;s PAN{" "}
                      {mode == "toupi" ? (
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          *
                        </span>
                      ) : null}
                    </p>
                    <div>
                      <input className="inputter-payer" />
                    </div>
                  </div>
                </div>
                <div className="flexer">
                  <div>
                    <p className="urgent-selector">
                      Token Amount{" "}
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
                      Beneficiary&apos;s PAN{" "}
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
      </div>
    );
  }

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
                <select
                  className="cat-selector"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {[
                    "House Rent",
                    "Society Maintenance",
                    "Office/Shop Rent",
                    "Property Token",
                    "Property Deposit",
                  ].map((val, index) => (
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
                  <div className="mode-checker">
                    <div className="padder">
                      <input
                        type="radio"
                        id="tobnk"
                        name="tobnk"
                        value="tobnk"
                        checked
                      />
                      <label htmlFor="tobnk">To Bank Account</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="toupi"
                        name="toupi"
                        value="toupi"
                      />
                      <label htmlFor="toupi">To UPI id</label>
                    </div>
                  </div>
                </div>
                <div className="numberer">
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
    </div>
  );
}
