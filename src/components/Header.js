import React from "react";
import { Link } from "react-router-dom";
import Country from "./Country";
import { IoSearch } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaUserAlt, FaShoppingBasket } from "react-icons/fa";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to covid 19 pandemic, orders may processed with a slight delay
            </p>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logo-wrapper d-flex align-items-center col-sm-2">
              <Link to={"/"}>
                <img
                  src="https://klbtheme.com/bacola/intro/assets/img/theme-logo-dark.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              <Country />

              <div
                className="header-search ml-3 mr-3 mt-3"
                style={{
                  width: "60%",
                  height: "60px",
                  padding: "10px",
                  background: "#f3f4f7",
                  position: "relative",
                  borderRadius: "10px",
                }}
              >
                <input
                  type="text"
                  placeholder="Search for products"
                  style={{
                    outline: "none",
                    fontSize: "14px",
                    color: "black",
                    width: "100%",
                    height: "40px",
                    border: "none",
                    background: "transparent",
                    padding: "0px 20px",
                  }}
                />
                <Button
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "15px",
                    zIndex: 100,
                    minWidth: "40px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    color: "black",
                    fontSize: "25px",
                  }}
                >
                  <IoSearch />
                </Button>
              </div>

              <div className="part3 d-flex align-items-center ml-auto">
                <Button
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "40px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    border: "1px solid gray",
                    color: "black",
                  }}
                  className="mr-3"
                >
                  <FaUserAlt style={{ fontSize: "20px" }} className="" />
                </Button>
                <div className="ml-auto cartTab d-flex align-items-center">
                  <span
                    className="price"
                    style={{ fontSize: "18px", fontWeight: 700 }}
                  >
                    $3.99
                  </span>
                  <div className="position-relative ml-2">
                    <Button
                      className=""
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "40px",
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        border: "1px solid gray",
                        color: "black",
                        background: "#fff1ee",
                      }}
                    >
                      <FaShoppingBasket
                        className=""
                        style={{ fontSize: "20px", color: "#ea2b0f" }}
                      />
                    </Button>
                    <span
                      className="count d-flex align-items-center justify-content-center"
                      style={{
                        position:
                          "absolute, top: 0, right: 0, background: #ea2b0f",
                        borderRadius: "50%",
                        color: "white",
                        width: "25px",
                        height: "25px",
                      }}
                    >
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
