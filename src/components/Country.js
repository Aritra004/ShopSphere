import { Button } from "@mui/material";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./styles.css";

const Country = () => {
  return (
    <>
      <Button
        className="country-drop"
        style={{
          textAlign: "center",
          justifyContent: "flex-start",
          border: "1px solid black",
          borderRadius: "7px",
          width: "150px",
          height: "auto",
          minWidth: "150px",
          marginTop: "5px",
        }}
      >
        <div className="info d-flex flex-column">
          <span
            className="lable text-capitalize"
            style={{
              fontSize: "12px",
              color: "rgba(0, 0, 0, 0.7)",
              lineHeight: "16px",
            }}
          >
            Your Location
          </span>
          <span
            className="name"
            style={{ fontSize: "14px", fontWeight: 700, lineHeight: "16px" }}
          >
            Canada
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};

export default Country;
