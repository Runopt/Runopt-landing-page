import React from 'react';
import Link from 'next/link';

const MeetTeam = () => {
  return (
    <div className="meet-team-container">
      <div className="glowing-info-container">
        <div className="info-glow"></div>
        <div className="info">
          <img src="./images/icons/about-icon.png" alt="" />
          <div>Our mission and vision</div>
        </div>
      </div>

      <h3>Become the global leader in <br/> digital civil engineering solutions</h3>

      <p>
        Our team is dedicated to revolutionizing civil engineering process with AI tools that
        drive smarter, sustainable solutions for the future.
      </p>

      <Link href="./team">
        <button>
          Learn more
          <img src="../images/icons/arrow-right.svg" alt="" />
        </button>
      </Link>
    </div>
  );
};

export default MeetTeam;
