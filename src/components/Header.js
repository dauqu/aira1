import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";
import "./../assets/style/Header.css";

export default function Header() {
  const [scroll, setScroll] = useState([]);
  const [open, setOpen] = useState();

  setInterval(() => {
    setScroll(window.scrollY);
  }, 100);
  const location = useLocation();

  const menu = [
    {
      id: 1,
      name: "Home",
      pathname: "/",
    },
    {
      id: 2,
      name: "How It Works",
      pathname: "/how-it-work",
    },
    {
      id: 3,
      name: "Team",
      pathname: "/team",
    },
  ];

  const change = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        className="header_main h-16 flex text-center justify-between"
        style={{
          padding: "3rem 5vw",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          zIndex: "100",
          opacity: "0.8",
          backgroundColor: scroll > 100 ? "#194B97" : "#00000000",
          // backgroundImage:
          //   "linear-gradient(to right, #0327cc, #0028b7, #0028a2, #00268d, #032478, #0c226f, #111f66, #141d5d, #181a5e, #1d175f, #22135f, #270e5f)",
        }}
      >
        {/* Left */}
        <Link className="left flex" to="/">
          <div className="logo mr-8">
            <img src={logo} />
          </div>
          <div className="company_name">
            <p
              style={{
                fontSize: "20px",
                color: "white",
              }}
            >
              Aira Protocol
            </p>
          </div>
        </Link>

        {/* Right */}
        <div className="right flex">
          <div className="menus flex">
            <nav
              style={{
                display: "flex",
                listStyle: "none",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                marginRight: "40px",
              }}
            >
              {menu.map((item) => {
                return (
                  <Link
                    className={
                      location.pathname === item.pathname
                        ? "underline"
                        : "" + " hover:underline"
                    }
                    key={item.id}
                    to={`${item.pathname}`}
                    style={{
                      fontFamily: "Inter",
                      fontSize: "1rem",
                      color: "#FAFAFA",
                      marginRight: "20px",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 18px",
                width: "114px",
                height: "48px",
                background: "#1C64F2",
                borderRadius: "24px",
                color: "#ffffff",
              }}
            >
              Enter App
            </button>
          </div>
          <div className="icon text-white w-10" onClick={change}>
            {open === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* MENU */}
      <div
        className="grid grid-cols-1 grid-rows-2 menu_2"
        style={{
          background: `${open === true ? "#0324B8" : ""}`,
          position: "fixed",
          zIndex: "1365",
          height: "100vh",
          width: "100%",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        {/* Top */}
        <div className="w-20 h-20">
          <div
            className="header_main h-16 flex text-center justify-between"
            style={{
              padding: "3rem 5vw",
              alignItems: "center",
              position: "fixed",
              width: "100%",
              zIndex: "100",
              opacity: "0.8",
              backgroundColor: scroll > 100 ? "#194B97" : "#00000000",
              // backgroundImage:
              //   "linear-gradient(to right, #0327cc, #0028b7, #0028a2, #00268d, #032478, #0c226f, #111f66, #141d5d, #181a5e, #1d175f, #22135f, #270e5f)",
            }}
          >
            {/* Left */}
            <Link className="left flex" to="/">
              <div className="logo mr-8">
                <img src={logo} />
              </div>
              <div className="company_name">
                <p
                  style={{
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Aira Protocol
                </p>
              </div>
            </Link>

            {/* Right */}
            <div className="right flex">
              <div className="icon text-white w-10" onClick={change}>
                {open === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full h-56 mt-10 nav_2">
          {menu.map((item) => {
            return (<></>
              // <div className="text-white list-none justify-start text-left size ml-4">
              //   <li className={`te text-xl mt-2 ${open === true? ""}`}>{item.name}</li>
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
