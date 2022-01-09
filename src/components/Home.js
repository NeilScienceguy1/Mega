import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <section class="home-section">
        {/* <div class="text">Dashboard</div> */}

        <div class="hero-image">
          <div class="hero-text">
            <h1>
              Welcome to <strong>mega</strong>
            </h1>
            <p>Making productivity easier.</p>
          </div>
        </div>
        <div class="services">
          <h1>Our Services</h1>
          <div class="cen">
            <div class="service">
              <i class="fas fa-anchor"></i>
              <h2>Chat</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div class="service">
              <i class="fab fa-android"></i>
              <h2>Stopwatch</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div class="service">
              <i class="fab fa-angellist"></i>
              <h2>Calculator</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div class="service">
              <i class="fas fa-apple-alt"></i>
              <h2>PDF Converter</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div class="service">
              <i class="fas fa-archway"></i>
              <h2>Dictonary</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
