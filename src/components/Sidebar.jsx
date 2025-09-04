import React from "react";
import avatar from "../assets/image.png";
//icons
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";
import DataUsageRoundedIcon from "@mui/icons-material/DataUsageRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { PiStarFourFill } from "react-icons/pi";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="icon first-icon">
        <PiStarFourFill style={{ color: "var(--accent)" }} />
      </div>
      <div className="avater-wrap">
        {avatar ? (
          <img src={avatar} alt="me" className="avatar" />
        ) : (
          <div className="avater-placeholder">KP</div>
        )}
      </div>
      <nav className="icons">
        <div style={{ color: "var(--accent)" }} className="icon">
          <HomeIcon />
        </div>
        <div className="icon">
          <RocketLaunchOutlinedIcon />
        </div>
        <div className="icon">
          <EditNoteOutlinedIcon />
        </div>
        <div className="icon">
          <PeopleOutlineSharpIcon />
        </div>
        <div className="icon">
          <DataUsageRoundedIcon />
        </div>
        <div className="icon">
          <MailOutlineRoundedIcon />
        </div>
        <div className="icon middle-icon">
          <SettingsOutlinedIcon />
        </div>
        <div className="icon">
          <LogoutOutlinedIcon />
        </div>
      </nav>
    </aside>
  );
}
