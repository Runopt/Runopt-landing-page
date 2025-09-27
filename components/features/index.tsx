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
                - Facilitate seamless collaboration among developers, utility providers, and regulators to align on power, connectivity, and zoning requirements. <br />- Score and prioritize potential sites based on utility and fiber availability, transportation access, and other key feasibility factors.
                <br /> - Accelerate decision-making by bringing stakeholders together around a shared, data-driven platform - from early feasibility through to site selection.
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

        <div className="feature" id="dataDriven">
          <div className="illustration">
            <img src="../images/data.png" alt="Data-driven feasibility illustration" loading="lazy" decoding="async" />
          </div>
          <div className="desc">
            <h5>A Platform for Utilities to Align Stakeholders and Timelines</h5>
            <p>
              <span className="dots"> {!expanded.dataDriven && '... '}</span>
              <span className={expanded.dataDriven ? 'show' : 'hide'}>
                - Facilitate early, seamless collaboration between developers and utility providers
                <br />- Predict realistic timelines and minimize service delays
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
      </div>

      <div className="features">
        <div className="feature" id="reporting">
          <div className="illustration">
            <img src="../images/reporting.png" alt="Customizable reports illustration" loading="lazy" decoding="async" />
          </div>
          <div className="desc">
            <h5>Interactive Geospatial Platform for Informed Site Evaluation</h5>
            <p>
              <span className="dots">{!expanded.reporting && '... '}</span>
              <span className={expanded.reporting ? 'show' : 'hide'}>
                - Visualize sites in 3D with terrain and utility overlays
                <br />
                - Use color-coded maps with interactive data for quick analysis
                <br />
                - Gain zoning, utility insights for faster, safer investment decisions
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
        <div className="feature" id="optimize">
          <div className="illustration">
            <img src="../images/grading.png" alt="Optimized grading and drainage illustration" loading="lazy" decoding="async" />
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
    </div>
  );
};

export default Features;
