import React from 'react';

const Features = () => {
  return (
    <div className="features-container" id='features'>
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
            <img src="../images/icons/empty-illustration.png" alt="" />
          </div>
          <div className="desc">
            <h5>Zoning Tools for Site Analysis</h5>
            <p>
              Let Runopt handle the zoning complexities and you could focus on
              innovative design.
            </p>
          </div>
        </div>
        <div className="feature" id="optimize">
          <div className="illustration">
            <img src="../images/icons/empty-illustration.png" alt="" />
          </div>
          <div className="desc">
            <h5>Optimized Grading and Drainage Design</h5>
            <p>
              Experience cutting-edge civil design where efficiency meets
              excellence
            </p>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="feature" id="same">
          <div className="illustration">
            <img src="../images/icons/empty-illustration.png" alt="" />
          </div>
          <div className="desc">
            <h5>Data-Driven Design Recommendations</h5>
            <p>
              Transform your approach from intuition-based to insight-driven
              with Runopt.
            </p>
          </div>
        </div>
        <div className="feature" id="same">
          <div className="illustration">
            <img src="../images/icons/empty-illustration.png" alt="" />
          </div>
          <div className="desc">
            <h5>Customizable Professional Reporting</h5>
            <p>Generate powerful reports that speak for your designs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
