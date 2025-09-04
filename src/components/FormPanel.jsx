import React from "react";

export default function FormPanel() {
  return (
    <aside className="form-panel">
      <h2 className="form-title">
        Let's define your <span className="accent">targets</span>
      </h2>
      <p className="muted small">
        Focus on the most relevant fields to shape your ICP — all fields are
        optional
      </p>

      <div className="card">
        <h3 style={{ fontWeight: "400" }}>Company Profile</h3>
        <div className="inner-card">
          <label className="label">Company Headcount</label>
          <select>
            <option>1-10..</option>
            <option>10-50</option>
            <option>50+</option>
          </select>

          <label className="label">Company HQ Locations</label>
          <select>
            <option>India..</option>
            <option>USA</option>
            <option>China</option>
          </select>

          <label className="label">Revenue range</label>
          <select>
            <option>50L - 1Cr..</option>
            <option>1cr+</option>
          </select>
        </div>

        <div className="card mt">
          <h3 style={{ fontWeight: "400" }}>Prospect Profile</h3>
          <div className="inner-card">
            <label className="label">Department</label>
            <select>
              <option>Search department..</option>
              <option>Product</option>
              <option>Marketing</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
