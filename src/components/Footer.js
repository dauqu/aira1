import { Link } from "react-router-dom";
import logo from "./../assets/bottom_logo-removebg-preview.png";
import twitter from "./../assets/twitter.png";
import "./../assets/style/Footer.css";

export default function Footer() {
  return (
    <>
      <div
        className="header h-16 flex text-center justify-between mt-20 mb-10"
        style={{
          padding: "0px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div className="left w-auto flex">
          <div className="logo"></div>
          <div className="company_name">
            <img src={logo} style={{
              width: "5rem"
            }}/>
          </div>

          <nav
          className="navbar"
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              marginRight: "40px",
              marginLeft: "30px",
            }}
          >
            <li
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#FAFAFA",
                marginRight: "20px",
              }}
            >
              How It Works
            </li>
            <li
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#FAFAFA",
                marginRight: "20px",
              }}
            >
              Team
            </li>
          </nav>
        </div>

        {/* Right */}
        <div className="right flex justify-end text-right">
          <div
          className=""
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "100px",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.3332 1.95133C36.7371 3.07713 34.97 3.93818 33.0998 4.50133C32.0961 3.34718 30.7621 2.52915 29.2782 2.15787C27.7944 1.7866 26.2323 1.87999 24.8033 2.42542C23.3743 2.97085 22.1472 3.942 21.2881 5.20752C20.429 6.47305 19.9793 7.97189 19.9998 9.50133V11.168C17.0709 11.2439 14.1686 10.5944 11.5515 9.27707C8.93441 7.9598 6.6837 6.01572 4.99984 3.618C4.99984 3.618 -1.66683 18.618 13.3332 25.2847C9.90072 27.6146 5.81176 28.7829 1.6665 28.618C16.6665 36.9513 34.9998 28.618 34.9998 9.45133C34.9983 8.98709 34.9537 8.52399 34.8665 8.068C36.5675 6.39049 37.7679 4.27252 38.3332 1.95133V1.95133Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "100px",
              margin: "0px 10px",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.3332 1.95133C36.7371 3.07713 34.97 3.93818 33.0998 4.50133C32.0961 3.34718 30.7621 2.52915 29.2782 2.15787C27.7944 1.7866 26.2323 1.87999 24.8033 2.42542C23.3743 2.97085 22.1472 3.942 21.2881 5.20752C20.429 6.47305 19.9793 7.97189 19.9998 9.50133V11.168C17.0709 11.2439 14.1686 10.5944 11.5515 9.27707C8.93441 7.9598 6.6837 6.01572 4.99984 3.618C4.99984 3.618 -1.66683 18.618 13.3332 25.2847C9.90072 27.6146 5.81176 28.7829 1.6665 28.618C16.6665 36.9513 34.9998 28.618 34.9998 9.45133C34.9983 8.98709 34.9537 8.52399 34.8665 8.068C36.5675 6.39049 37.7679 4.27252 38.3332 1.95133V1.95133Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              color: "white",
              padding: "10px 0px",
              borderRadius: "100px",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.3332 1.95133C36.7371 3.07713 34.97 3.93818 33.0998 4.50133C32.0961 3.34718 30.7621 2.52915 29.2782 2.15787C27.7944 1.7866 26.2323 1.87999 24.8033 2.42542C23.3743 2.97085 22.1472 3.942 21.2881 5.20752C20.429 6.47305 19.9793 7.97189 19.9998 9.50133V11.168C17.0709 11.2439 14.1686 10.5944 11.5515 9.27707C8.93441 7.9598 6.6837 6.01572 4.99984 3.618C4.99984 3.618 -1.66683 18.618 13.3332 25.2847C9.90072 27.6146 5.81176 28.7829 1.6665 28.618C16.6665 36.9513 34.9998 28.618 34.9998 9.45133C34.9983 8.98709 34.9537 8.52399 34.8665 8.068C36.5675 6.39049 37.7679 4.27252 38.3332 1.95133V1.95133Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className="pt-5"
        style={{
          width: "auto",
          height: "auto",
          borderTop: "1px solid white",
          display: "flex",
          // background: "#0D1F5B",
          // padding: "10px 6%",
          justifyContent: "end",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "12px",
            fontFamily: "Inter",
          }}
        >
          © 2021, Aira Protocol. All Rights Reserved.
        </p>
        <p
          style={{
            color: "white",
            fontSize: "12px",
            fontFamily: "Inter",
            marginLeft: "10px",
          }}
        >
          Privacy Policy • Terms and conditions
        </p>
      </div>
    </>
  );
}
