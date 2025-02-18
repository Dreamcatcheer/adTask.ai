import React from "react";
import "./App.css";
import './index.css'; 

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">adTask.ai</div>
        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <div className="nav-buttons">
          <button className="login-btn">Log in</button>
          <button className="schedule-btn">Schedule a Call</button>
        </div>
      </header>

      <main className="main-section">
        <div className="tagline">
          ✨ TRANSFORM YOUR DIGITAL PRESENCE WITH AI AGENTS
        </div>
        <h1 className="title">adTask.ai</h1>
        <p className="description">
          Stop struggling with marketing decisions. Our AI assistant analyzes
          your business, creates personalized strategies, and helps you execute
          them – all in real-time.
        </p>
        <button className="cta-btn">Start Free Trial</button>
        <p className="cta-subtext">Try AdTask AI free for 30 days</p>
      </main>
    </div>
  );
}

export default App;

