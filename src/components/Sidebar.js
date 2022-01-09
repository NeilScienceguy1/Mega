import React, { useState } from "react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div class={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div class="logo-details">
          <img src="/logo.png" class="bx icon logo-details" onClick={() => window.location.href = "/"}/>
          <div class="logo_name">MEGA</div>
          <i
            class={`${sidebarOpen ? "bx bx-menu-alt-right" : "bx bx-menu"}`}
            id="btn"
            onClick={() => {
              if (sidebarOpen) {
                setSidebarOpen(false);
              } else {
                setSidebarOpen(true);
              }
            }}
          ></i>
        </div>
        <ul class="nav-list">
          <li>
            <i class={`bx bx-search ${sidebarOpen ? "open" : ""}`}></i>
            <input type="text" placeholder="Search..." />
            <span class="tooltip">Search</span>
          </li>
          <li>
            <a href="/">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Dashboard</span>
            </a>
            <span class="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="/chats">
              <i class="bx bx-chat"></i>
              <span class="links_name">Messages</span>
            </a>
            <span class="tooltip">Messages</span>
          </li>
          <li>
            <a href="/calculator">
              <i class="bx bx-calculator"></i>
              <span class="links_name">Calculator</span>
            </a>
            <span class="tooltip">Calculator</span>
          </li>
          <li>
            <a href="/dictionary">
              <i class="bx bx-book"></i>
              <span class="links_name">Dictionary</span>
            </a>
            <span class="tooltip">Dictionary</span>
          </li>
          <li>
            <a href="/stopwatch">
              <i class="bx bx-stopwatch"></i>
              <span class="links_name">Stopwatch</span>
            </a>
            <span class="tooltip">Stopwatch</span>
          </li>
          <li>
            <a href="/pdf/converter">
              <i class="bx bx-export"></i>
              <span class="links_name">PDF Converter</span>
            </a>
            <span class="tooltip">PDF Converter</span>
          </li>
          <li class="profile">
            <div class="profile-details">
              <div class="name_job">
                <div class="name">
                  <strong>MEGA</strong>
                </div>
                <div class="phrase">Making productivity easier.</div>
              </div>
            </div>
            <i class="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
