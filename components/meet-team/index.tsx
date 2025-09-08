import React from 'react';
import Link from 'next/link';

const MeetTeam = () => {
  return (
    <div className="meet-team-container">
      <div className="glowing-info-container">
        <div className="info-glow"></div>
        <div className="info">
          <img src="./images/icons/about-icon.png" alt="About Runopt icon" />
          <div>Our mission and vision</div>
        </div>
      </div>

      <h3>Become the global leader in <br/> digital land development solutions</h3>

      <p>
        Our team is dedicated to revolutionizing land development process with AI tools that
        drive smarter, sustainable solutions for the future.
      </p>

      <Link href="./about-us">
        <button>
          Learn more
          <img src="../images/icons/arrow-right.svg" alt="Arrow right icon" />
        </button>
      </Link>
    </div>
  );
};

export default MeetTeam;
