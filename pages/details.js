import React from "react";
import WestIcon from "@mui/icons-material/West";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import TextField from "@mui/material/TextField";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import NotesIcon from "@mui/icons-material/Notes";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Payment() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="main-container">
      <div className="header-container">
        <h1>Rental Agreement</h1>
        <p>Get your rental agreement made completely online</p>
      </div>
      <div className="information-container-main">
        <div className="information-container">
          <div className="back-button">
            <WestIcon
              sx={{
                fontSize: 23,
              }}
            />
            <p>Go back</p>
          </div>
          <div className="title">
            <h1>Step 5/7</h1>
            <h2>Contract Details</h2>
            <h3>
              Please fill in the following details below... there'll be some
              other details here later on...
            </h3>
          </div>
        </div>
        <div className="border" />
        <div className="tall-border" />
        <div className="tall-border-two" />
        <div className="feilder-container">
          <div className="sider">
            <div className="componenter">
              <p>Generate Estimate</p>
              <div className="round">
                <CurrencyRupeeIcon
                  sx={{
                    fontSize: 27.47,
                    color: "white",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="round-mini" />
            </div>
            <div className="componenter">
              <p>Property Details</p>
              <div className="round">
                <HouseSidingIcon
                  sx={{
                    fontSize: 27.47,
                    color: "white",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="round-mini" />
            </div>
            <div className="componenter">
              <p>Landlord Details</p>
              <div className="round">
                <AirlineSeatReclineNormalIcon
                  sx={{
                    fontSize: 27.47,
                    color: "white",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="round-mini" />
            </div>
            <div className="componenter">
              <p>Tenant Details</p>
              <div className="round">
                <GroupsIcon
                  sx={{
                    fontSize: 27.47,
                    color: "white",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="round-mini" />
            </div>
            <div className="componenter">
              <p>Contract Detail</p>
              <div className="round">
                <LocalPhoneIcon
                  sx={{
                    fontSize: 27.47,
                    color: "white",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="round-mini" />
            </div>
            <div className="incompleted-componenter">
              <p>Payment Detail</p>
              <div className="incompleted-round">
                <CurrencyRupeeIcon
                  sx={{
                    fontSize: 27.47,
                    color: "black",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="round-mini-incompleted" />
            </div>
            <div className="incompleted-componenter">
              <p>Summary</p>
              <div className="incompleted-round">
                <NotesIcon
                  sx={{
                    fontSize: 27.47,
                    color: "black",
                    fontWeight: "700",
                  }}
                />
              </div>
              <div className="round-mini-incompleted" />
            </div>
          </div>
          <div>
            <div className="inputter">
              <div>
                <p>Agreement Duration (In months) </p>
                <div className="toggentainer">
                  <div className="toggler">6 months</div>
                  <div className="toggler">11 months</div>
                  <div className="toggler">12 months</div>
                  <div className="toggler">
                    <select>
                      <option>other</option>
                      <option>18 months</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p>
                    Agreement Start Date{" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>{" "}
                  </p>
                  <div>
                    <TextField
                      sx={{
                        width: "360px",
                        marginRight: "20px",
                      }}
                      type="date"
                      id="rent"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <CalendarMonthIcon
                              sx={{
                                fontSize: 27.47,
                                color: "black",
                                fontWeight: "700",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      Rent Amount
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        *
                      </span>{" "}
                    </p>
                    <div className="toggentainer">
                      <TextField
                        sx={{
                          width: "360px",
                        }}
                        label="Rent Agreement"
                        id="rent"
                        placeholder="₹ 22,450"
                      />
                    </div>
                  </div>
                  <div>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Increase Rent after"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p>
                    Refundable Deposit
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>{" "}
                  </p>
                  <div>
                    <TextField
                      sx={{
                        width: "360px",
                      }}
                      label="Refundable Deposit"
                      id="rent"
                      placeholder="Refundable Deposit"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <p>Non Refundable Deposit</p>
                    <div className="toggentainer">
                      <TextField
                        sx={{
                          width: "360px",
                        }}
                        label="Non Refundable Deposit"
                        id="rent"
                        placeholder="Non Refundable Deposit"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Minimum Lockin Period (In months){" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </p>
                <div className="toggentainer">
                  <div className="toggler">1</div>
                  <div className="toggler">2</div>
                  <div className="toggler">3</div>
                  <div className="toggler">
                    <select>
                      <option>other</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p>
                    Select Day
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>{" "}
                  </p>
                  <div>
                    <TextField
                      sx={{
                        width: "360px",
                      }}
                      label="Select Day"
                      id="rent"
                      placeholder="Select Day"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      Notice period (In Months){" "}
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        *
                      </span>{" "}
                    </p>
                    <div className="toggentainer">
                      <TextField
                        sx={{
                          width: "360px",
                        }}
                        label="How many months?"
                        id="rent"
                        placeholder="How many months?"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p>
                    Miscellaneous (if any other Terms & Conditions) (Maximum 200
                    character){" "}
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>{" "}
                  </p>
                  <div>
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      sx={{
                        width: "740px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="submit-container">
              <div>
                <h1 className="total">Total: ₹470 </h1>
              </div>
              <div>
                <button className="submitter-one">Add Clause</button>
                <button className="submitter">Save and Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
