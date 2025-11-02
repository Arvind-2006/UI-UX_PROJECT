import React from "react";

const PortfolioView = () => {
  return (
    <section className="portfolio">
      <h2>Your Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/200" alt="Project" />
          <h4>Landing Page Design</h4>
          <p>React / Tailwind / Figma</p>
        </div>
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/200" alt="Project" />
          <h4>Mobile App UI</h4>
          <p>Flutter / Dart</p>
        </div>
      </div>
      <button className="upload-btn">Upload New Project</button>
    </section>
  );
};

export default PortfolioView;
