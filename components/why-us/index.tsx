import React from 'react';

const WhyUs = () => {
  const benefits = [
    // {
    //   id: 1,
    //   icon: '../images/icons/fast.svg',
    //   title: 'Faster Site Design',
    //   desc: 'Runopt automates complex calculations and iterations, allowing engineers to complete projects faster than the traditional method.',
    // },
    // {
    //   id: 2,
    //   icon: '../images/icons/cost.svg',
    //   title: 'Cost Effective',
    //   desc: 'Runopt offers cost-effective solutions by optimizing grading, drainage, and site layout, saving millions on large projects.',
    // },
    {
      id: 1,
      icon: '../images/icons/collaborate.svg',
      title: 'Streamline Collaboration',
      desc: 'Runopt makes early-stage site assessments transparent. With 3D visualization, zoning and utility insights, and AI recommendations, stakeholders gain a clearer view of potential sites',
      // desc: 'Runopt enables engineers to seamlessly share designs, reports, and revisions, keeping all stakeholders aligned throughout the project',
    },
    {
      id: 2,
      icon: '../images/icons/enhance.svg',
      title: 'Enhance Decision Making',
      // desc: 'Runopt’s advanced analytics provide insights into design choices, enabling engineers to make data-driven decisions with confidence.',
      desc:'Runopt’s advanced analytics provide insights into site potential, enabling developers to make data-driven investment and planning decisions with confidence.',
    },
    {
      id: 3,
      icon: '../images/icons/compliance.svg',
      title: 'Compliance Made Easy',
      // desc: 'Runopt not only helps make your designs more efficient but also ensures compliance with the latest industry standards without any hassle.',
      desc: 'Runopt helps land developers evaluate sites efficiently while ensuring projects meet the latest regulatory and zoning requirements without hassle',
    },
    {
      id: 4,
      icon: '../images/icons/time.svg',
      title: 'Boost Productivity',
      // desc: 'Runopt automates calculations and repetitive tasks, allowing engineers to focus on creative problem-solving and innovation.',
      desc: 'Runopt automates calculations and repetitive site evaluations - land developers can complete hundreds of assessments per year faster, focusing on smarter investment decisions',
    },
 
  ];
  return (
    <div className="why-us-container features-container">
      <div className="title-text">
        <div className="title-big">
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
          Our <br />
          Competitive Edge
          <div className="glowing-line-container">
            <div className="glowing-line"></div>
          </div>
        </div>
      </div>

      <div className="benefits">
        {benefits.map((benefit) => {
          return (
            <div className="benefit" key={benefit.id}>
              <img src={benefit.icon} alt="" />

              <h5>{benefit.title}</h5>
              <p>{benefit.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
