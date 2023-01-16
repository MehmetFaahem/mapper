import React from "react";
import { Header } from "./genreciept";

function RecieptDown() {
  return (
    <div className="home-container">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
        }}
      >
        <div>
          <svg
            className="reciept-svg"
            viewBox="0 0 98 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.6947 93.4273L58.5091 77.9521L64.4929 71.9683L72.6947 80.1702L91.2134 61.6516L97.1972 68.9249M51.0294 93.4273H10.7939C8.05768 93.4273 5.43355 92.3403 3.49878 90.4055C1.564 88.4708 0.477051 85.8467 0.477051 83.1105V10.893C0.477051 5.16714 5.06803 0.576172 10.7939 0.576172H83.0116C85.7478 0.576172 88.3719 1.66312 90.3067 3.59789C92.2414 5.53266 93.3284 8.15678 93.3284 10.893V51.1284C88.789 48.4977 83.4758 47.0017 77.8532 47.0017L72.6947 47.4144V41.8433H21.1107V52.1601H60.7788C56.5108 54.9737 53.0085 58.8034 50.5865 63.3053C48.1645 67.8071 46.8987 72.8401 46.9027 77.9521C46.9027 83.5747 48.3987 88.8879 51.0294 93.4273ZM46.9027 62.4769H21.1107V72.7937H46.9027M72.6947 21.2097H21.1107V31.5265H72.6947"
              fill="black"
            />
          </svg>
        </div>
        <div>
          <h1 className="reciept-ready-text">Your Rent Receipt is Ready!!</h1>
        </div>
        <div>
          <p className="reciept-ready-desc">
            We&apos;ve also sent the link to download the PDF For the receipt to{" "}
            <span>odunsinicholas@gmail.com</span>
          </p>
        </div>
        <div className="button-container-reciept">
          <button className="edit-button">Edit Information</button>
          <button className="download-button">Download Rent Receipt now</button>
        </div>
      </div>
    </div>
  );
}

export default RecieptDown;
