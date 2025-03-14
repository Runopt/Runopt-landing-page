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
            <img src="../images/analyze.png" alt="" />
          </div>
          <div className="desc">
            <h5>Zoning Tools for Site Analysis</h5>
            <p>
              Let Runopt handle the zoning complexities and you could focus on
              innovative design.
              <br />
              <span className="dots"> {!expanded.zone && '... '}</span>
              <span className={expanded.zone ? 'show' : 'hide'}>
                - Use natural language to ask AI for interpretations of local
                zoning regulations <br />- Instant compliance checks for
                setbacks, parking restrictions, and more
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

        <div className="feature" id="optimize">
          <div className="illustration">
            <img src="../images/grading.png" alt="" />
          </div>
          <div className="desc">
            <h5>Optimized Grading and Drainage Design</h5>
            <p>
              Experience cutting-edge civil design where efficiency meets
              excellence <br />
              <span className="dots">{!expanded.optimize && '... '}</span>
              <span className={expanded.optimize ? 'show' : 'hide'}>
                - Up to 30% reduction in design time <br />- Minimized
                environmental impact with smart earthwork management <br />-
                Unlock synergies between variables for better outcomes than
                focusing on one field
              </span>
              <span
                className="read-more"
                onClick={() => handleReadMore('optimize')}
              >
                {expanded.optimize ? ' Read Less' : ' Read More'}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="feature" id="dataDriven">
          <div className="illustration">
            <img src="../images/data.png" alt="" />
          </div>
          <div className="desc">
            <h5>Data-Driven Design Recommendations</h5>
            <p>
              Transform your approach from intuition-based to insight-driven
              with Runopt. <br />
              <span className="dots"> {!expanded.dataDriven && '... '}</span>
              <span className={expanded.dataDriven ? 'show' : 'hide'}>
                - Enhanced project outcomes through holistic site optimization{' '}
                <br />- Explore multiple design scenarios in minutes, not days
              </span>
              <span
                className="read-more"
                onClick={() => handleReadMore('dataDriven')}
              >
                {expanded.dataDriven ? ' Read Less' : ' Read More'}
              </span>
            </p>
          </div>
        </div>

        <div className="feature" id="reporting">
          <div className="illustration">
            <img src="../images/reporting.png" alt="" />
          </div>
          <div className="desc">
            <h5>Customizable Professional Reporting</h5>
            <p>
              Generate powerful reports that speak for your designs. <br />
              <span className="dots">{!expanded.reporting && '... '}</span>
              <span className={expanded.reporting ? 'show' : 'hide'}>
                - Adapt presentation style to different audiences - from
                executives to technical reviewers <br />- Help with transparent,
                data-rich communications
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
