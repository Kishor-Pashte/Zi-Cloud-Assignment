import React from "react";

//icons
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutline";

export default function HeaderBar() {
  return (
    <header className="header">
      <div className="left">
        <button className="back">
          <ChevronLeftRoundedIcon />
        </button>
        <div className="titleContent">
          <button className="title">Untitled List</button>
          <DriveFileRenameOutlineTwoToneIcon
            style={{
              opacity: "90%",
              fontSize: "20px",
              marginBottom: "4px",
              marginLeft: "-5px",
              marginRight: "5px",
            }}
          />
        </div>
      </div>

      <div className="middle">
        <div className="slides">
          <div className="slide" style={{ background: "var(--accent)" }}></div>
          <span style={{ color: "var(--accent)" }}>Who</span>
        </div>
        <div className="slides">
          <div className="slide"></div>
          <span>What/Why</span>
        </div>
        <div className="slides">
          <div className="slide"></div>
          <span>Where</span>
        </div>
        <div className="slides">
          <div className="slide"></div>
          <span>When</span>
        </div>
      </div>

      <div className="right">
        <button className="save">Save</button>
        <button className="compaign">Make Campaign</button>
      </div>
    </header>
  );
}
