import React from "react";

const FreelanceView = () => {
  return (
    <section className="freelance">
      <h2>Find Freelance Gigs</h2>
      <div className="gig-list">
        <div className="gig-card">
          <h4>Frontend Developer Needed</h4>
          <p>TechCorp — Remote</p>
          <button>Apply Now</button>
        </div>
        <div className="gig-card">
          <h4>Logo Design for Startup</h4>
          <p>Designly — $150</p>
          <button>Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default FreelanceView;
