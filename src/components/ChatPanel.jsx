import React from "react";

// Icons
import { PiStarFourFill } from "react-icons/pi";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MicSharpIcon from "@mui/icons-material/MicSharp";

export default function ChatPanel() {
  return (
    <section className="chat-panel">
      <div className="chat-header">
        <span
          style={{ color: "var(--accent)", marginTop: "18px" }}
          className="first-icon"
        >
          <PiStarFourFill style={{ color: "var(--accent)" }} />
        </span>
        <h1>Oslo chat</h1>
      </div>

      <div className="chat-body">
        <div className="chat">
          <p className="muted">Hello I'm Oslo, Tell me what's on your mind</p>
          <span className="chat-icons">
            <ContentCopyOutlinedIcon style={{ fontSize: "smaller" }} />
            &nbsp;
            <RefreshSharpIcon style={{ fontSize: "smaller" }} />
          </span>
        </div>
        <div className="user-chat">
          <button className="cta">Create leads on Tech targets</button>
        </div>
        <div className="chat">
          <p className="muted">
            ICP updated to target Tech Companies. If you want to specify roles,
            locations, or <br></br>other criteria for decision-makers, please
            let me know
          </p>
          <span className="chat-icons">
            <ContentCopyOutlinedIcon style={{ fontSize: "smaller" }} />
            &nbsp;
            <RefreshSharpIcon style={{ fontSize: "smaller" }} />
          </span>
        </div>
      </div>

      <div className="chat-input">
        <SearchSharpIcon
          style={{ fontSize: "20px", opacity: "0.5", margin: "0px 12px" }}
        />
        <MicSharpIcon
          style={{
            fontSize: "20px",
            margin: "0px 12px",
            color: "var(--accent)",
          }}
        />
      </div>
    </section>
  );
}
