import React, { useState } from 'react';
interface ExpandedState {
  zone: boolean;
  optimize: boolean;
  dataDriven: boolean;
  reporting: boolean;
}
const Features: React.FC = () => {
  const [expanded, setExpanded] = useState({
    zone: false,
    optimize: false,
    dataDriven: false,
    reporting: false,
  });

  const handleReadMore = (id: keyof ExpandedState) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="features-container" id="features">
      <div className="title-text">
        <div className="title-big">
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
          Features
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
        </div>
        <div className="desc">
          Runopt is transforming civil engineering, offering ecological and
          environmental benefits to developers, engineers, governments, and
          NGOs.
        </div>
      </div>

      <div className="features features-one">
        <div className="feature" id="zone">
          <div className="illustration">
            <img src="../images/analyze.png" alt="Zoning analysis illustration" loading="lazy" decoding="async" />
          </div>
          <div className="desc">
            <h5>Collaborative Platform for Data Center Site Proposals</h5>
            <p>
              <span className="dots"> {!expanded.zone && '... '}</span>
              <span className={expanded.zone ? 'show' : 'hide'}>
                - Facilitate seamless collaboration among developers, utility providers, and regulators to align on power, connectivity, and zoning requirements
                <br /> - Improving Transparency by bringing stakeholders together around a shared, data-driven platform
              </span>
              <span
                className="read-more"
                onClick={() => handleReadMore('zone')}
              >
                {expanded.zone ? 'Read Less' : 'Read More'}
              </span>
            </p>
          </div>
        </div>

        <div className="feature" id="reporting">
          <div className="illustration">
            <img src="../images/reporting.png" alt="Customizable reports illustration" loading="lazy" decoding="async" />
          </div>
          <div className="desc">
            <h5>Government Planning Analysis & Expert Referral</h5>
            <p>
              <span className="dots">{!expanded.reporting && '... '}</span>
              <span className={expanded.reporting ? 'show' : 'hide'}>
                - Collect and analyze the latest published government information, benchmarking it against nearby municipalities to forecast future planning steps
                <br />
                - Leverage the established professional network to identify and connect with the most suitable subject matter experts for consultation
              </span>
              <span
                className="read-more"
                onClick={() => handleReadMore('reporting')}
              >
                {expanded.reporting ? 'Read Less' : 'Read More'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
