import React from "react";

export default function Navbar() {
  return (
    <div
      className="nav"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "90px",
        borderRadius: "16px",
        background: "#fff",
        padding:"0px 30px"
      }}>
      <div
        className="logo-and-label"
        style={{
          display: "flex",
          height: "61px",
          width: "149px",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          gap: "16px",
        }}>
        <div className="logo" style={{ display: "flex" }}>
          <img
            style={{ width: "50px", height: "50px", borderRadius: "10px" }}
            src="ecg.jpeg"
            alt="ecgLogo"
          />
        </div>
        <div className="label" style={{ display: "flex" }}>
          <p style={{ color: "#737373" }}>OLTPV</p>
        </div>
      </div>
      <div
        className="nav-items"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "52px",
          width: "360px",
          height: "24px",
        }}>
        <div
          className="nav-item"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            height: "24px",
            width: "55px",
          }}>Meters</div>
        <div
          className="nav-item"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            height: "24px",
            width: "146px",
          }}>Transaction Status</div>
        <div
          className="nav-item"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "10px",
            height: "24px",
            width: "55px",
          }}>Logout</div>
      </div>
    </div>
  );
}
